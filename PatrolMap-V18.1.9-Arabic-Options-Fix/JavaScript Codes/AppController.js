/**
 * APPLICATION SESSION & KIOSK SCALING
 * Controls welcome screen, 10-second development idle reset, zoom handling,
 * and suspension of inactivity during games or video playback.
 * DEPLOYMENT: change INACTIVITY_TIMEOUT to 90 * 1000 when ready.
 */
/* Central application session controller. All future modules use this session ID. */
window.PatrolApp = (() => {
    // Development timeout. Restore to 90 seconds for showroom deployment.
    const INACTIVITY_TIMEOUT = 10 * 1000;
    let mediaPlaying = false, gamePlaying = false;
    let active = false, sessionId = 0, lastActivity = 0, timer, callbacks;
    const welcome = document.getElementById("welcomeScreen");
    const start = document.getElementById("touchToStart");
    const map = document.getElementById("app");
    function schedule() {
        clearTimeout(timer);
        if (active && !mediaPlaying && !gamePlaying) timer = setTimeout(check, Math.max(0, INACTIVITY_TIMEOUT - (Date.now() - lastActivity)));
    }
    function check() {
        if (!active || mediaPlaying || gamePlaying) return;
        if (Date.now() - lastActivity >= INACTIVITY_TIMEOUT) endSession("idle");
        else schedule();
    }
    function beginSession() {
        if (active) return;
        callbacks.clear();
        active = true; sessionId++; lastActivity = Date.now();
        welcome.hidden = true; map.inert = false;
        schedule();
        document.dispatchEvent(new CustomEvent("patrol:session-start", {detail:{sessionId}}));
    }
    function endSession(reason = "manual") {
        if (!active) return;
        const endedId = sessionId;
        active = false; mediaPlaying = false; gamePlaying = false; clearTimeout(timer);
        callbacks.clear();
        map.inert = true; welcome.hidden = false;
        start.focus();
        document.dispatchEvent(new CustomEvent("patrol:session-end", {detail:{sessionId:endedId, reason}}));
    }
    function activity(event) {
        if (!active || !event.isTrusted) return;
        lastActivity = Date.now(); schedule();
    }
    function init(options) {
        callbacks = options; map.inert = true; welcome.hidden = false;
        start.addEventListener("click", beginSession);
        // Capture scroll events from nested panels; they do not bubble.
        // Touch movement also works when native scrolling cancels pointer events.
        const interactionEvents = [
            "pointerdown", "pointermove", "pointerup", "click",
            "touchstart", "touchmove", "touchend", "keydown", "wheel", "scroll"
        ];
        for (const name of interactionEvents) {
            document.addEventListener(name, activity, {capture:true, passive:true});
        }
        document.addEventListener("visibilitychange", () => { if (!document.hidden) check(); });
        window.addEventListener("focus", check);
        window.addEventListener("pageshow", event => { if (event.persisted) endSession("restored"); else check(); });
    }
    function setMediaPlaying(value) { if (!active) return; mediaPlaying = Boolean(value); lastActivity = Date.now(); schedule(); }
    function setGamePlaying(value) { if (!active) return; gamePlaying = Boolean(value); lastActivity = Date.now(); schedule(); }
    return {init, endSession, setMediaPlaying, setGamePlaying, get active(){return active;}, get sessionId(){return sessionId;}};
})();
