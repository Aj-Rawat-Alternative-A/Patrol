/**
 * RESPONSIVE DISPLAY AND TEMPORARY KIOSK CONTROLS — V18.1.7
 *
 * FIT: Scale the existing 1920×1080 canvas uniformly to the current viewport.
 *      This avoids shifting any map markers, hotspots or game drag targets.
 * MODES: Label the viewport for selective CSS touch and tablet adjustments.
 * FULLSCREEN: Requires a trusted click; browser/TV support may vary.
 * CONTROLS: Only visible when the ACTIVE MAP is the current screen.
 *
 * Do not move game, heritage, quiz or map state into this display module.
 */
(() => {
    'use strict';
    const DESIGN_WIDTH = 1920;
    const DESIGN_HEIGHT = 1080;
    const stage = document.getElementById('kioskStage');
    const mapControls = document.getElementById('mapUtilityControls');
    const fullscreenButton = document.getElementById('fullscreenButton');
    const map = document.getElementById('app');
    const welcome = document.getElementById('welcomeScreen');

    // This optional hint is outside the scaled stage so it stays legible on phones.
    const portraitHint = document.createElement('div');
    portraitHint.id = 'portraitOrientationHint';
    portraitHint.textContent = 'For the best Patrol game experience, rotate your device to landscape.';
    portraitHint.hidden = true;
    document.body.appendChild(portraitHint);

    function fitStage() {
        const viewport = document.documentElement;
        const width = viewport.clientWidth || window.innerWidth;
        const height = viewport.clientHeight || window.innerHeight;
        if (!width || !height) return;
        const scale = Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT);
        stage.style.setProperty('--stage-scale', String(scale));
        const ratio = width / height;
        const coarse = window.matchMedia('(pointer: coarse)').matches;
        const mode = ratio < 1.05
            ? 'portrait'
            : coarse && width <= 1400
                ? 'tablet-landscape'
                : width < 1440 ? 'desktop-compact'
                : ratio >= 1.95 ? 'ultrawide' : 'wide';
        document.documentElement.dataset.deviceMode = mode;
        portraitHint.hidden = !(ratio < 1.05 && width < 900);
        // Keep canvas dimensions native; do not stretch to a 4:3 or 21:9 ratio.
    }

    function mapOnlyVisible() {
        if (!window.PatrolApp?.active || !welcome.hidden) return false;
        for (const id of [
            'heritageIntro', 'heritageVideoScreen', 'heritageScreen',
            'gameLobby', 'quizScreen', 'generationMatchScreen', 'achievementModal'
        ]) {
            const element = document.getElementById(id);
            if (element && !element.hidden) return false;
        }
        for (const id of ['activityModal', 'rewardModal']) {
            if (document.getElementById(id)?.classList.contains('active')) return false;
        }
        return !map.inert;
    }

    function updateControls() {
        mapControls.hidden = !mapOnlyVisible();
    }

    function updateFullscreenLabel() {
        const enabled = !!document.fullscreenElement;
        fullscreenButton.textContent = enabled ? 'EXIT FULLSCREEN' : 'FULLSCREEN';
        fullscreenButton.setAttribute('aria-label', enabled ? 'Exit fullscreen' : 'Enter fullscreen');
        fullscreenButton.setAttribute('aria-pressed', String(enabled));
        fitStage();
    }

    fullscreenButton.addEventListener('click', async () => {
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen();
            } else {
                // Some television browsers and iOS browsers do not expose this API.
                fullscreenButton.textContent = 'NOT SUPPORTED';
                return;
            }
        } catch (error) {
            console.warn('Fullscreen request was rejected by the browser', error);
            fullscreenButton.textContent = 'FULLSCREEN UNAVAILABLE';
        }
        updateFullscreenLabel();
    });

    // Listen for state changes that don't dispatch a single shared UI event.
    const observer = new MutationObserver(updateControls);
    for (const id of [
        'welcomeScreen', 'heritageIntro', 'heritageVideoScreen',
        'heritageScreen', 'gameLobby', 'quizScreen',
        'generationMatchScreen', 'achievementModal',
        'activityModal', 'rewardModal', 'app'
    ]) {
        const element = document.getElementById(id);
        if (element) observer.observe(element, {
            attributes: true,
            attributeFilter: ['hidden', 'class', 'inert']
        });
    }
    document.addEventListener('patrol:session-start', updateControls);
    document.addEventListener('patrol:session-end', updateControls);
    document.addEventListener('fullscreenchange', updateFullscreenLabel);
    document.addEventListener('fullscreenerror', updateFullscreenLabel);
    window.addEventListener('resize', fitStage);
    window.addEventListener('orientationchange', fitStage);
    window.addEventListener('pageshow', fitStage);
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', fitStage);
    }

    // Preserve the previous browser zoom protections.
    document.addEventListener('wheel', event => {
        if ((event.ctrlKey || event.metaKey) && event.cancelable) event.preventDefault();
    }, {capture: true, passive: false});
    document.addEventListener('keydown', event => {
        if ((event.ctrlKey || event.metaKey) && ['+', '=', '-', '_', '0', 'Add', 'Subtract'].includes(event.key)) {
            if (event.cancelable) event.preventDefault();
        }
    }, {capture: true});
    for (const name of ['gesturestart', 'gesturechange']) {
        document.addEventListener(name, event => {
            if (event.cancelable) event.preventDefault();
        }, {capture: true, passive: false});
    }

    fitStage();
    updateControls();
    updateFullscreenLabel();
})();
