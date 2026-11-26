/**
 * DUAL-ORIENTATION CENTRE DISPLAY — V18.1.4
 * One live game controller, two readable views of its centre information.
 * The original game body remains the source of truth; the top panel only
 * mirrors its DOM, timers and controls. Do NOT run a second game timer.
 */
(() => {
  'use strict';
  function create(sourceId, mirrorId) {
    const source = document.getElementById(sourceId);
    const mirror = document.getElementById(mirrorId);
    if (!source || !mirror) throw new Error('Dual-center markup is missing');

    function sync() {
      // Render-driven sync (not per frame), so score and result animations
      // remain owned by the game and touch events are never duplicated.
      mirror.replaceChildren(...Array.from(source.childNodes, node => node.cloneNode(true)));
      const sourceButtons = [...source.querySelectorAll('button')];
      [...mirror.querySelectorAll('button')].forEach((button, index) => {
        button.addEventListener('click', () => {
          const liveButton = sourceButtons[index];
          if (liveButton?.isConnected && !liveButton.disabled) liveButton.click();
        });
      });
      [...mirror.querySelectorAll('[id]')].forEach(el => {
        if (el.id === 'quizCountdown' || el.id === 'gmCount') el.classList.add('dual-live-counter');
        el.removeAttribute('id');
      });
      // The source may have updated its ring styling before rendering finished.
      syncLive();
    }

    function syncLive() {
      const liveSource = source.querySelector('#quizCountdown, #gmCount, .gm-counter');
      const liveMirror = mirror.querySelector('.dual-live-counter, .gm-counter');
      if (liveSource && liveMirror) liveMirror.textContent = liveSource.textContent;
      const ringSource = source.querySelector('.quiz-ring');
      const ringMirror = mirror.querySelector('.quiz-ring');
      if (ringSource && ringMirror) {
        ringMirror.style.setProperty('--remaining', ringSource.style.getPropertyValue('--remaining') || '100%');
      }
      // Image reveals run in lockstep for top and bottom players.
      const sourceImages = source.querySelectorAll('.quiz-image');
      const mirrorImages = mirror.querySelectorAll('.quiz-image');
      sourceImages.forEach((img, index) => {
        if (mirrorImages[index]) mirrorImages[index].style.filter = img.style.filter;
      });
    }

    return {sync, syncLive, clear() { mirror.replaceChildren(); }};
  }
  window.PatrolDualCenterDisplay = {create};
})();
