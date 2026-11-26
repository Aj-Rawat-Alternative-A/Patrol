# Nissan Patrol Interactive Experience — V18 Maintained Edition

This is a **non-functional-change cleanup** of the tested V18 prototype. All existing game logic, rendering and the current map positions have been retained. Historical README files and an unused duplicate script directory were removed. Code now has file-level descriptions and an index at the top of `Map-Container.css`.

## Start here

1. Keep your current V18 folder as a backup. Unzip this package into a **separate project folder**.
2. Copy your existing `assets/Cars`, `assets/Fonts`, `assets/UI`, and `assets/Heritage` folders into the new project's `assets/` folder. These were **not included** in the original V18 ZIP and are still required.
3. Retain any legacy map assets in your existing `assets/Map/` folder, particularly `BaseMap.png` if present. The project also uses the included `assets/Map/Empty Updated Map.png`.
4. Open `PatrolInteractiveMap.html` in the same way that you run your currently working local copy. Use a local web server if browser security prevents media access.
5. Perform a smoke test: Touch to Start, sequential vehicle collection, garage open/close and 7/7 reward; Legacy Quiz; Generation Match; idle reset.

## File map — where do I edit something?

| Goal | File | Search for |
|---|---|---|
| Session idle timeout / browser zoom scaling | `JavaScript Codes/AppController.js` | `INACTIVITY_TIMEOUT`, `fitStage` |
| Generation map positions / locked & unlocked markers | `JavaScript Codes/PatrolMapFunction.js` | `newMarkerFiles`, `boxMarker`, `new-generation-marker` |
| Sequential collection / next car white pulse | `JavaScript Codes/PatrolMapFunction.js` + `Map-Container.css` | `next-car-hint`, `next-car-body-glow` |
| Game button locations on the map | `JavaScript Codes/PatrolMapFunction.js` | `Generation Match`, `Desert Safari` |
| Vertical garage / counts / garage reward | `JavaScript Codes/PatrolMapFunction.js` + `Map-Container.css` | `garageCollection`, `garageToggle`, `garagePanel` |
| Figma top-right progress typography | `Map-Container.css` | `#mapProgress #progress`, `#mapProgress #progressLabel` |
| Heritage text, images and optional video | `JavaScript Codes/HeritageController.js` | `profiles`, `assets/Heritage` |
| Lobby seats / languages / shared difficulty | `JavaScript Codes/GameLobbyController.js` | `difficulty`, `lobbySeats` |
| Quiz question content, correct answers, Arabic | `JavaScript Codes/QuizQuestions.js` | `questions`, `image` |
| Quiz duration, scoring and final results | `JavaScript Codes/QuizController.js` | `round`, `score`, `results` |
| Match timer / penalty / 14 matching tiles | `JavaScript Codes/GenerationMatchController.js` | `ROUND_SECONDS`, `PENALTY_SECONDS`, `GENERATIONS` |
| Visual sizes, spacing and styling | `Map-Container.css` | Read index at file top |
| Add new page/screen elements | `PatrolInteractiveMap.html` | Screen IDs |

## Architecture

- **HTML** provides the map stage and game/heritage screen roots. JavaScript builds most live UI within those roots.
- **AppController** owns session start/end, inactivity, kiosk viewport scaling, and activity suspension for video/games.
- **PatrolMapFunction** owns map markers, chronological collection and shared garage. Collection is independent from game results.
- **HeritageController** controls story pages and collection eligibility.
- **GameLobbyController** provides four fixed player zones and passes player configuration into the selected game.
- **QuizQuestions + QuizController** provide bilingual question data and multiplayer quiz behavior.
- **GenerationMatchController** owns each player's independent matching tiles, placement, mistakes and results.

## Asset directory (supplied here)

```
assets/
  Map/                 Clean updated map
  NewMap/              Seven locked/unlocked marker pairs, four game badges,
                       next-car glow and the collapsed-garage artwork
  Garage Icons/        Seven pairs of locked/unlocked garage row images
  GenerationMatch/     Fourteen TEMPORARY vehicle match tiles
```

**Additional folders needed from your working project:** `Cars`, `Fonts`, `UI`, `Heritage`. The matching images are provisional, not the final approved front/rear set. Quiz questions and Arabic translations are also provisional. Rewards use non-scannable QR placeholders.

## What was removed

- Historical `V17.*-README.txt` files that duplicated older upgrade instructions.
- `JavaScript%20Codes/PatrolMapFunction.js`, a stale duplicate stored in an encoded folder name. The HTML loads **`JavaScript Codes/PatrolMapFunction.js`** (space, not `%20`).
- Superseded PNGs of collapsed/open garage states no longer used by the dynamic vertical garage. The active clean collapsed background, logo and individual garage row images are retained.

## Do not change without testing

- **Script load order** in `PatrolInteractiveMap.html`.
- **Player rotations** in CSS: bottom zones 0°, top zones 180°.
- **Session event flow** (`patrol:session-start`, `patrol:session-end`) and idle suspension during a game.
- **Pointer/touch drag events** for Generation Match. Physical multitouch table testing is still pending.

## Deployment checklist

- Change the test `INACTIVITY_TIMEOUT = 10 * 1000` to `90 * 1000` when approved.
- Obtain final vehicle image pairs, approved question bank, Arabic text and real reward destinations.
- Test 1, 2, 3, and 4 players simultaneously on the production table; test pinch/zoom, scroll, video and long sessions.
- Confirm all font and media asset files exist in their expected local locations.

## Verification

Source file and image references were audited; JS syntax and ZIP integrity were checked. This is a maintenance-only package, **not a claim of live browser or physical touchscreen certification**.


## Achievement unlock popup (V18.1.3)
- Artwork: `assets/UnlockPopup/` (arc, shield, rotating stroke).
- Markup: `#achievementModal` near the end of `PatrolInteractiveMap.html`.
- Visual styling: search `V18.1.3 — ACHIEVEMENT POPUP REFINEMENT` near the end of `Map-Container.css`.
- Behaviour and Close button: `showAchievementUnlock()` / `closeAchievementUnlock()` in `JavaScript Codes/PatrolMapFunction.js`.
- The rotating stroke has `pointer-events: none`, otherwise its large transparent image box can block the Close button.
- The popup still appears after each generation is collected, and the seventh is followed by the final collection reward when closed.


## V18.1.4 — Dual-orientation shared game centre

- Both quiz and Generation Match now use two synchronized half-panels.
- Player 3/4 (top of table) read the upper panel rotated 180°.
- Player 1/2 (bottom of table) read the lower panel normally.
- `JavaScript Codes/DualCenterDisplay.js` copies **presentation only**, never game state or game timers.
- Quiz and Match controllers call `dualCenter.sync()` after a state render and `syncLive()` for countdown updates.
- The Play Again and Return to Map controls work from **either side**.
- CSS layout rules are at the very bottom of `Map-Container.css`; search `V18.1.4`.
- No changes to the four player seats, scoring, game selection, unlocking or achievement popup.
- When updating the centre panel, do not put a second game controller/timer in the upper half.


## V18.1.5 — Adaptive Multiplayer Layout

The actual **joined lobby seats** determine presentation for both Legacy Quiz and Generation Match.
Seat mapping: `0 = bottom left`, `1 = bottom right`, `2 = top left`, `3 = top right`.
The `AdaptiveGameLayout.js` module sets `data-adaptive-count`, `data-adaptive-side`
and `data-adaptive-seats` on the active game screen; the final section of
`Map-Container.css` contains the responsive fixed-canvas geometry.

- 1 player: one expanded board on their own side, plus one large centre display facing them.
- 2 same-side players: two expanded boards on their chosen side with one shared display.
- 2 opposite-side players: only their original two corners shown and the central display remains dual-orientation.
- 3 players: only occupied corners shown, with modest board expansion and dual-orientation centre.
- 4 players: retains the original four-corner boards and mirrored centre.

Empty game panels are not rendered. This is a **presentation-only** change;
players, individual languages, timer, answers, drag/drop and scoring are unchanged.
The lobby deliberately retains all joining positions so guests can choose their side.

**Important testing:** Browser layout and physical multi-touch have not been verified
in this build. Check every player combination with the real 1920x1080 kiosk;
review question text wrapping and the matching-board drag targets.


## V18.1.6 — Adaptive layout trial (CSS-only)

- When exactly two players join from opposite sides (any top corner + any bottom corner), each board expands to **1300 × 485px** on the left, while the dual-orientation shared information stays fully readable in a **435px right-side column**. The occupied seats remain rotated as before; identity and player controls are unchanged.
- For one player or two on opposite sides, the **Generation Match final results** and **Legacy Quiz final results** use a balanced two-column design: large achievement/rank on the left, scores and non-scannable reward placeholder on the right.
- All experimental dimensions are in the **V18.1.6** section at the end of `Map-Container.css`, making it easy to revise after design review. No quiz, matching, score, time, heritage, map, or reward logic changed.


## V18.1.7 — Device display scaling & map-only fullscreen

- **`JavaScript Codes/ResponsiveDisplay.js`** handles resizing and device-type classification, fullscreen requests, and visibility of the temporary Reset / Fullscreen buttons.
- **`Map-Container.css`** has the `V18.1.7` section for button placement, touch-target sizing and the portrait suggestion.
- Both controls appear together at the **bottom centre of the interactive map**, and are hidden during welcome, heritage, achievement, lobby, games and reward overlays. Reset is still handled by `PatrolMapFunction.js`.
- Fullscreen requires a browser supporting the Fullscreen API and a real user click. Some television browsers do not support it. If unsupported, use the TV browser's own kiosk/fullscreen setting.
- The reference canvas remains **1920 × 1080**, with proportional fitting and letterboxing on non-16:9 displays. This intentional constraint preserves the positions of cars, touch targets and all four player zones.
- The single-/multi-player adaptive layout remains controlled by `AdaptiveGameLayout.js` and the corresponding CSS.
- Portrait devices show a rotate-to-landscape suggestion; the full table experience is designed for landscape screens.
- The **10-second developer inactivity timeout** remains in `AppController.js`; change to 90 seconds for showroom production.


## V18.1.8 — Shared centre readability

The shared information columns in both games now use larger font sizes and clearer visual hierarchy. All adjustments are in the final `V18.1.8 — SHARED CENTRE LEGIBILITY` CSS section of `Map-Container.css`. The 1920×1080 scaling, mirrored orientation and game controllers are unchanged. For exceptionally long Arabic heritage facts, test their legibility at the intended device size before deployment.


## V18.1.9 — Arabic quiz letters and Generation Match difficulty

* `QuizController.js` renders the option letter and translated answer in separate
  text spans. CSS pins A/B/C/D to the right of Arabic options, on either side
  of the table; shuffling, score calculation and answer indices are unchanged.
* `GenerationMatchController.js` currently does not use `context.difficulty`.
  Entry, Medium and Expert are placeholders for Generation Match and all run
  the same 14-tile, 90-second challenge with +3 seconds per mistake. Difficulty
  still filters the Legacy Quiz question bank.
