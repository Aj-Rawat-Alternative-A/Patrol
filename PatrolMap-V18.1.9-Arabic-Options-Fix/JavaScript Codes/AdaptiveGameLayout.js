/**
 * ADAPTIVE MULTIPLAYER LAYOUT — V18.1.5
 * Screens adapt to the ACTUAL occupied table corners, not a player count alone.
 * Player seat indices: 0 bottom-left, 1 bottom-right, 2 top-left, 3 top-right.
 * All seat orientation, quiz/match scoring and timing remain unchanged.
 * This module sets presentation-only attributes on each game screen.
 */
(() => {
  'use strict';
  const ids = ['quizScreen', 'generationMatchScreen'];
  function apply(screen, players) {
    if (!screen) return;
    const seats = [...new Set(players.map(player => Number(player.seat)))].filter(n => Number.isInteger(n) && n >= 0 && n <= 3).sort();
    const top = seats.some(n => n >= 2);
    const bottom = seats.some(n => n < 2);
    const side = top && bottom ? 'both' : top ? 'top' : 'bottom';
    const count = seats.length;
    screen.dataset.adaptiveCount = String(count);
    screen.dataset.adaptiveSide = side;
    screen.dataset.adaptiveSeats = seats.join(',');
    screen.classList.toggle('adaptive-one', count === 1);
    screen.classList.toggle('adaptive-two', count === 2);
    screen.classList.toggle('adaptive-three', count === 3);
    screen.classList.toggle('adaptive-four', count === 4);
    // One-sided sessions use one larger centre panel; mixed sessions use both.
    const upper = screen.querySelector('.dual-center-top');
    const lower = screen.querySelector('.dual-center-bottom');
    if (upper) upper.hidden = !top;
    if (lower) lower.hidden = !bottom;
  }
  function clear(screen) {
    if (!screen) return;
    for (const key of ['adaptiveCount', 'adaptiveSide', 'adaptiveSeats']) delete screen.dataset[key];
    screen.classList.remove('adaptive-one', 'adaptive-two', 'adaptive-three', 'adaptive-four');
    const upper = screen.querySelector('.dual-center-top');
    const lower = screen.querySelector('.dual-center-bottom');
    if (upper) upper.hidden = false;
    if (lower) lower.hidden = false;
  }
  window.PatrolAdaptiveLayout = {apply, clear};
})();
