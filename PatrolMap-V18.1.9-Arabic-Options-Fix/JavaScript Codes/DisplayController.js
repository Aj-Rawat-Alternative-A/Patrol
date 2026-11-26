/**
 * TEMPORARY DISPLAY / FULLSCREEN CONTROL
 * The browser's Fullscreen API requires a real user click/tap; it cannot
 * reliably enter fullscreen automatically. Some TV browsers disallow it.
 * UI stays outside the scaled stage so it remains reachable at any screen size.
 * Remove this file, its HTML control and CSS block for kiosk deployment.
 */
(() => {
    'use strict';
    const button = document.getElementById('fullscreenToggle');
    const label = document.getElementById('fullscreenLabel');
    const message = document.getElementById('fullscreenMessage');
    if (!button || !label) return;

    function setMessage(text) {
        message.textContent = text;
        message.hidden = !text;
    }
    function syncState() {
        const enabled = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
        button.setAttribute('aria-pressed', String(enabled));
        button.setAttribute('aria-label', enabled ? 'Exit fullscreen' : 'Enter fullscreen');
        button.title = enabled ? 'Exit fullscreen' : 'Enter fullscreen';
        label.textContent = enabled ? 'Exit fullscreen' : 'Fullscreen';
        button.classList.toggle('is-fullscreen', enabled);
        if (enabled) setMessage('');
        // Ensure the map is fitted after a fullscreen transition.
        window.dispatchEvent(new Event('resize'));
    }
    async function toggleFullscreen() {
        const active = document.fullscreenElement || document.webkitFullscreenElement;
        try {
            if (active) {
                if (document.exitFullscreen) await document.exitFullscreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                else throw new Error('Fullscreen exit is not supported.');
            } else {
                const target = document.documentElement;
                if (target.requestFullscreen) await target.requestFullscreen();
                else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
                else throw new Error('Fullscreen is not supported in this TV browser.');
            }
            syncState();
        } catch (error) {
            setMessage('Fullscreen unavailable here. Try F11, TV browser settings or kiosk mode.');
            console.warn('Fullscreen request failed:', error);
        }
    }
    button.addEventListener('click', toggleFullscreen);
    document.addEventListener('fullscreenchange', syncState);
    document.addEventListener('webkitfullscreenchange', syncState);
    syncState();
})();
