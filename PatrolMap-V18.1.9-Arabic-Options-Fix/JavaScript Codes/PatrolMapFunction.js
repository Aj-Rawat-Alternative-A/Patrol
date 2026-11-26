/**
 * MAP, GENERATION COLLECTION & MY GARAGE
 * Adjust marker coordinates, sequential collection, glow, game markers,
 * garage imagery and the 7-generation completion reward here.
 * Uses the clean updated map and assets/NewMap + assets/Garage Icons.
 */

/* =====================================
   PATROL GENERATIONS
===================================== */

const generations = [
    { id: "4W60", file: "4W60.png", year: "1951-1960", x: 12.55, y: 84.3 },
    { id: "60 Series", file: "60-Series.png", year: "1960 – 1980", x: 29.5, y: 64.8 },
    { id: "160 Series", file: "160-Series.png", year: "1980 – 1987", x: 20.3, y: 43.9 },
    { id: "Y60", file: "Y60.png", year: "1987 – 1997", x: 34.0, y: 29.0 },
    { id: "Y61", file: "Y61.png", year: "1997 Onward", x: 56.7, y: 43.8 },
    { id: "Y62", file: "Y62.png", year: "2010 – 2024", x: 72.7, y: 65.5 },
    { id: "Y63", file: "Y63.png", year: "2024 Onwards", x: 86.9, y: 32.0 }
];

/* =====================================
   GAME GENERATIONS
===================================== */

const gameAvailability = {
    "Desert Safari": false,
    "Generation Match": true,
    "Patrol Expedition": false,
    "Patrol Legacy Quiz": true
};

/* =====================================
   ELEMENT REFERENCES
===================================== */

const mapViewport =
    document.getElementById("mapViewport");

const mapContainer =
    document.getElementById("mapContainer");

const mapImage =
    document.getElementById("mapImage");

const hotspotLayer =
    document.getElementById("hotspotLayer");

const progressDisplay =
    document.getElementById("progress");

const activityModal =
    document.getElementById("activityModal");

const rewardModal =
    document.getElementById("rewardModal");

const achievementModal =
    document.getElementById("achievementModal");

const achievementVehicleImage =
    document.getElementById("achievementVehicleImage");

const achievementUnlockedTitle =
    document.getElementById("achievementUnlockedTitle");

const achievementUnlockedOrdinal =
    document.getElementById("achievementUnlockedOrdinal");


/* =====================================
   PROGRESS STORAGE
===================================== */

let completed = new Set();
// Remove obsolete progress keys from previous prototypes.
try { localStorage.removeItem("patrolCompleted"); sessionStorage.removeItem("patrolCompleted"); sessionStorage.removeItem("patrolLastActivity"); } catch (_) {}

let selectedGenerations = [];


/* =====================================
   MAP IMAGE MANAGEMENT
===================================== */




/*
    Fit the image inside the available viewport.

    The image and hotspot layer always have
    identical dimensions.

    This prevents button positioning from
    being affected by image scaling.
*/

function resizeMap() {

    if (!mapImage.complete || !mapImage.naturalWidth) {
        return;
    }

    const availableWidth =
        mapViewport.clientWidth;

    const availableHeight =
        mapViewport.clientHeight;

    const originalWidth =
        mapImage.naturalWidth;

    const originalHeight =
        mapImage.naturalHeight;

    const scale = Math.min(
        availableWidth / originalWidth,
        availableHeight / originalHeight
    );

    const displayedWidth =
        originalWidth * scale;

    const displayedHeight =
        originalHeight * scale;

    mapContainer.style.width =
        displayedWidth + "px";

    mapContainer.style.height =
        displayedHeight + "px";

    renderHotspots();
}


/* =====================================
   MAP IMAGE SWITCHING
===================================== */




/* =====================================
   HOTSPOT GENERATION
===================================== */

/* V17.4 — artwork supplied at 1920×1080, positioned independently
   on the clean map. Positions are top-left coordinates in map pixels. */
const MAP_REFERENCE_W = 1920, MAP_REFERENCE_H = 1080;
const markerLocations = [
    [81, 730],    // 4W60, lower-left
    [422, 505],   // 60 Series
    [265, 272],   // 160 Series
    [564, 101],   // Y60
    [978, 288],   // Y61
    [1289, 513],  // Y62
    [1531, 180]   // Y63
];
const newMarkerFiles = ['4W60 Series','60 Series','160 Series','Y60','Y61','Y62','Y63'];
// V17.6: Individual unlocked-image origins, measured against the supplied
// 1920x1080 reference map. These are offsets relative to each locked PNG's
// exact top-left reference coordinate, which is already correct on the road.
// Use the CAR/WHEEL location as the anchor, NOT the top-left of the label flag.
// Tune each tuple here if a future art revision changes vehicle silhouettes.
const unlockedVehicleOffsets = [
    [-105,-80], // 4W60
    [-105,-80], // 60 Series
    [-105,-80], // 160 Series
    [-105,-80], // Y60
    [-105,-80], // Y61
    [-105,-80], // Y62
    [-105,-80]  // Y63
];
const mapImageRoot = 'assets/NewMap/';
function boxPx(el, x, y, w, h) {
    Object.assign(el.style, {
        left:(100*x/MAP_REFERENCE_W)+'%', top:(100*y/MAP_REFERENCE_H)+'%',
        width:(100*w/MAP_REFERENCE_W)+'%', height:(100*h/MAP_REFERENCE_H)+'%'
    });
}
function boxMarker(el,x,y,w,h) {
    Object.assign(el.style, {
        left:(100*x/270)+'%', top:(100*y/245)+'%',
        width:(100*w/270)+'%', height:(100*h/245)+'%'
    });
}
function nextEligibleIndex() { return generations.findIndex(g => !completed.has(g.id)); }

function renderHotspots() {
    const next = nextEligibleIndex();
    generations.forEach((generation,i) => {
        let marker = document.getElementById('marker-'+i);
        if (!marker) {
            marker = document.createElement('div');
            marker.id='marker-'+i;
            marker.className='new-generation-marker';
            const hint = document.createElement('img');
            hint.className='next-car-hint'; hint.alt=''; hint.draggable=false;
            hint.src=mapImageRoot+'Next Car To Unlock.png';
            const locked=document.createElement('img');
            locked.className='new-marker-locked';locked.draggable=false;locked.alt='';
            locked.src=mapImageRoot+newMarkerFiles[i]+' Locked.png';
            const unlocked=document.createElement('img');
            unlocked.className='new-marker-unlocked';unlocked.draggable=false;unlocked.alt='';
            unlocked.src=mapImageRoot+newMarkerFiles[i]+' Unlocked.png';
            const button=document.createElement('button');
            button.type='button';button.className='new-marker-button';
            button.addEventListener('click',()=>selectGeneration(generation.id));
            marker.append(hint,locked,unlocked,button);
            hotspotLayer.appendChild(marker);
            const [x,y]=markerLocations[i];
            boxPx(marker,x,y,270,245);
            // The unlocked artwork carries its own radial glow and is deliberately larger.
            // Centre the white pulse on the locked CAR body/wheels, not on its flag text.
            // Coordinates are relative to the marker's 270 x 245 reference box.
            boxMarker(hint,40,105,190,175);
            boxMarker(locked,0,0,i===0?263:254,235);
            // Locked and unlocked assets have distinct internal padding.
            // Position the full-size unlocked art by its vehicle wheels/contact
            // point so it remains ON THE ROAD instead of sliding off-road.
            const [unlockX,unlockY]=unlockedVehicleOffsets[i];
            boxMarker(unlocked,unlockX,unlockY,i===0?430:444,398);
            // Include both vehicle positions in the hit target.
            boxMarker(button,0,56,255,178);
        }
        const isCollected=completed.has(generation.id);
        const isNext=i===next;
        marker.classList.toggle('is-collected',isCollected);
        marker.classList.toggle('is-next',isNext);
        marker.classList.toggle('is-future',!isCollected&&!isNext);
        marker.querySelector('button').setAttribute('aria-label',
            isCollected?'Revisit '+generation.id+' heritage':
            isNext?'Explore '+generation.id+' and unlock it':
            generation.id+' locked; collect earlier generations first');
    });
}


/* =====================================
   SELECT GENERATION
===================================== */

function selectGeneration(id) {
    if (!PatrolApp.active) return;
    const index=generations.findIndex(g=>g.id===id);
    const next=nextEligibleIndex();
    if (index<0) return;
    if (!completed.has(id) && index!==next) {
        const prerequisite=generations[next];
        openModal('Generation Locked',
            prerequisite ? 'Collect '+prerequisite.id+' first to unlock '+id+'. Follow the highlighted Patrol on the map.' : 'Complete the earlier generations first.');
        document.getElementById('finishActivity').hidden=true;
        return;
    }
    selectedGenerations = [];
    openModal(id, completed.has(id) ? "Collected. The heritage profile will be available here." : "Heritage profile coming in the next development phase. Complete all heritage sections to unlock this Patrol.");
    document.getElementById("finishActivity").hidden = true;
    document.dispatchEvent(new CustomEvent("patrol:heritage-request", {detail:{id, sessionId:PatrolApp.sessionId}}));
}

// Future heritage module calls this only after all required content is viewed.
function ordinalLabel(index) {
    const suffixes = ["1ST", "2ND", "3RD", "4TH", "5TH", "6TH", "7TH"];
    return suffixes[index - 1] || `${index}TH`;
}

function showAchievementUnlock(id) {
    const generation = generations.find(g => g.id === id);
    const generationIndex = generations.findIndex(g => g.id === id);
    if (!PatrolApp.active || !generation || generationIndex < 0) return;

    achievementVehicleImage.src = "assets/Cars/" + generation.file;
    achievementVehicleImage.alt = "Nissan Patrol " + generation.id;
    achievementUnlockedTitle.textContent = "UNLOCKED A PATROL " + generation.id.toUpperCase();
    achievementUnlockedOrdinal.textContent = `[${ordinalLabel(generationIndex + 1)} GEN].`;

    achievementModal.hidden = false;
    achievementModal.classList.add("active");
    mapApp.inert = true;
    achievementModal.querySelector("#achievementClose").focus();
}

function closeAchievementUnlock() {
    const shouldOpenReward = pendingFinalReward && completed.size === generations.length;

    clearTimeout(celebrationTimer);
    celebrationTimer = null;
    pendingAchievementUnlock = null;
    pendingFinalReward = false;

    achievementModal.classList.remove("active");
    achievementModal.hidden = true;

    if (!PatrolApp.active) return;

    if (shouldOpenReward) {
        collectionCelebrated = true;
        showReward(true);
        return;
    }

    mapApp.inert = false;
}

function completeHeritage(id, sessionId) {
    if (!PatrolApp.active || sessionId !== PatrolApp.sessionId || !generations.some(g => g.id === id)) return false;
    if (completed.has(id)) return true;
    if (generations[nextEligibleIndex()]?.id !== id) return false;
    completed.add(id);
    pendingAchievementUnlock = id;
    pendingFinalReward = completed.size === generations.length;
    closeModal();
    updateProgress();
    mapApp.inert = true;
    const unlockSession = PatrolApp.sessionId;
    const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 800;
    clearTimeout(achievementTimer);
    achievementTimer = setTimeout(() => {
        achievementTimer = null;
        if (PatrolApp.active && PatrolApp.sessionId === unlockSession && completed.has(id)) {
            showAchievementUnlock(id);
        }
    }, delay);
    return true;
}
window.completeHeritage = completeHeritage;
window.isPatrolCollected = id => completed.has(id);

function selectGame(gameName) {
    if (!PatrolApp.active || !Object.hasOwn(gameAvailability, gameName)) return;
    selectedGenerations = [];
    if (gameAvailability[gameName]) {
        closeModal();
        document.dispatchEvent(new CustomEvent("patrol:game-request", {detail:{name:gameName, sessionId:PatrolApp.sessionId}}));
    } else {
        openModal(gameName, "Coming soon — available in a future quarterly release.");
        document.getElementById("finishActivity").hidden = true;
    }
}

/* Allow other scripts to access selectGame */

window.selectGame = selectGame;

// New independent game graphics on the clean map (1920×1080).
const gamePositions = [
    ['Generation Match', 390, 766, 309, 150, 'Generation Match.png'],
    ['Desert Safari', 605, 427, 266, 150, 'Desert Safari.png'],
    ['Patrol Expedition', 825, 123, 287, 150, 'Patrol Expedition.png'],
    ['Patrol Legacy Quiz', 1500, 741, 257, 150, 'Legacy Quiz.png']
];
for (const [name,x,y,w,h,file] of gamePositions) {
    const btn=document.createElement('button');
    btn.type='button';btn.className='game-hotspot new-game-marker';
    btn.setAttribute('aria-label',gameAvailability[name]?'Play '+name:name+' — Coming soon');
    boxPx(btn,x,y,w,h);
    const art=document.createElement('img');
    art.src=mapImageRoot+file;art.alt='';art.draggable=false;
    btn.append(art);
    if (!gameAvailability[name]) {
       btn.classList.add('coming-soon');
       const label=document.createElement('span');label.className='new-coming-soon';label.textContent='COMING SOON';
       btn.append(label);
    }
    btn.addEventListener('click',()=>selectGame(name));
    mapContainer.append(btn);
}


/* =====================================
   MODAL MANAGEMENT
===================================== */

function openModal(title, description) {
    document.getElementById("finishActivity").hidden = false;

    document.getElementById(
        "activityTitle"
    ).textContent = title;

    document.getElementById(
        "activityDescription"
    ).textContent = description;

    activityModal.classList.add("active");

}


function closeModal() {

    activityModal.classList.remove("active");

    selectedGenerations = [];

}


/* =====================================
   COMPLETE ACTIVITY
===================================== */

document.getElementById(
    "closeActivity"
).addEventListener("click", closeModal);


/* =====================================
   UPDATE PROGRESS
===================================== */

// My Garage uses the same completed Set as the map; no separate storage.
const garageToggle = document.getElementById("garageToggle");
const garagePanel = document.getElementById("garagePanel");
const garageClose = document.getElementById("garageClose");
const garageCollection = document.getElementById("garageCollection");

function setGarageOpen(open, restoreFocus = false) {
    garageToggle.setAttribute("aria-expanded", String(open));
    garageToggle.setAttribute("aria-label", (open ? "Close" : "Open") + " My Garage");
    garagePanel.classList.toggle("open", open);
    garagePanel.inert = !open;
    if (restoreFocus) garageToggle.focus();
}
garageToggle.addEventListener("click", () => setGarageOpen(garageToggle.getAttribute("aria-expanded") !== "true"));
garageClose.addEventListener("click", () => setGarageOpen(false, true));
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && garagePanel.classList.contains("open")) setGarageOpen(false, true);
});
mapContainer.addEventListener("pointerdown", event => {
    if (!garagePanel.contains(event.target) && !garageToggle.contains(event.target)) setGarageOpen(false);
});

function renderGarage() {
    const count=completed.size;
    document.getElementById('garageSummary').textContent=`${count} of 7 Patrols unlocked`;
    const toggleCount=document.getElementById('garageToggleCount');
    toggleCount.textContent=`${count} of 7 Patrols unlocked`;
    const closedArt=garageToggle.querySelector('img');
    // Keep the collapsed garage bar identical at every progress level (0–7).
    // Only the live count changes; never swap to the different filled-state artwork.
    closedArt.src=mapImageRoot+'Garage (Empty)Closed-Clean.png';
    garagePanel.classList.toggle('has-reward', count === generations.length);
    garageCollection.replaceChildren();
    for(const generation of [...generations].reverse()) {
        const unlocked=completed.has(generation.id);
        const row=document.createElement('div');row.className='garage-generation-row';
        const image=document.createElement('img');
        const label=newMarkerFiles[generations.indexOf(generation)];
        image.src='assets/Garage Icons/Model='+label+', State='+(unlocked?'Unlocked':'Locked')+'.png';
        image.alt=generation.id+(unlocked?' unlocked':' locked');
        image.draggable=false;
        row.append(image);
        garageCollection.appendChild(row);
    }
}

let celebrationTimer = null;
let collectionCelebrated = false;
let pendingAchievementUnlock = null;
let pendingFinalReward = false;
let achievementTimer = null;
const rewardReopen = document.getElementById("garageReward");
const rewardGrid = document.getElementById("rewardCollection");
const mapApp = document.getElementById("app");

function updateProgress() {

    const count = completed.size;

    progressDisplay.textContent =
        String(count).padStart(2, "0") + "/07";

    document.getElementById("progressLabel").innerHTML =
        count === 7 ? "ALL GENERATIONS<br>ARE COLLECTED." : "COLLECT ALL<br>GENERATIONS";

    renderGarage();

    renderHotspots();

    rewardReopen.hidden = count !== generations.length;
    if (count === generations.length && PatrolApp.active && !collectionCelebrated && !pendingAchievementUnlock && !achievementModal.classList.contains("active")) {
        collectionCelebrated = true;
        const session = PatrolApp.sessionId;
        mapApp.inert = true;
        // Wait for the approved 750ms marker transition before celebrating.
        const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 800;
        celebrationTimer = setTimeout(() => {
            celebrationTimer = null;
            if (PatrolApp.active && PatrolApp.sessionId === session && completed.size === generations.length) showReward(true);
        }, delay);
    }

}


/* =====================================
   REWARD
===================================== */

function showReward(celebrate = false) {
    if (!PatrolApp.active || completed.size !== generations.length) return;
    setGarageOpen(false);
    rewardGrid.replaceChildren();
    for (const generation of generations) {
        const card = document.createElement("article");
        const image = document.createElement("img");
        image.src = "assets/Cars/" + generation.file;
        image.alt = "Nissan Patrol " + generation.id;
        image.draggable = false;
        const name = document.createElement("strong");
        name.textContent = generation.id;
        const year = document.createElement("small");
        year.textContent = generation.year;
        card.append(image, name, year);
        rewardGrid.appendChild(card);
    }
    mapApp.inert = true;
    rewardModal.classList.toggle("celebrate", celebrate);
    rewardModal.classList.add("active");
    document.getElementById("closeReward").focus();
}
function closeReward() {
    rewardModal.classList.remove("active", "celebrate");
    if (PatrolApp.active) { mapApp.inert = false; garageToggle.focus(); }
}
document.getElementById("closeReward").addEventListener("click", closeReward);
rewardReopen.addEventListener("click", () => showReward(false));
rewardModal.addEventListener("keydown", event => { if (event.key === "Escape") closeReward(); });

document.getElementById("achievementClose").addEventListener("click", () => closeAchievementUnlock());
document.getElementById("achievementDismissIcon").addEventListener("click", () => closeAchievementUnlock());
achievementModal.addEventListener("keydown", event => { if (event.key === "Escape") closeAchievementUnlock(); });


/* =====================================
   RESET PROGRESS
===================================== */

function clearMapSession() {
    clearTimeout(celebrationTimer);
    clearTimeout(achievementTimer);
    celebrationTimer = null;
    achievementTimer = null;
    collectionCelebrated = false;
    pendingAchievementUnlock = null;
    pendingFinalReward = false;
    rewardGrid.replaceChildren();
    rewardModal.classList.remove("celebrate");
    achievementModal.classList.remove("active");
    achievementModal.hidden = true;
    setGarageOpen(false);
    completed.clear();
    selectedGenerations = [];
    activityModal.classList.remove("active");
    rewardModal.classList.remove("active");
    mapApp.inert = false;
    updateProgress();
}
function resetProgress(automatic = false) {
    if (automatic !== true && !confirm("Are you sure you want to reset all Patrol Progress?")) return;
    PatrolApp.endSession("manual");
}

/* Reset button */

document.getElementById(
    "resetButton"
).addEventListener("click", () => resetProgress(false));


/* =====================================
   RESPONSIVE RESIZING
===================================== */

window.addEventListener(
    "resize",
    resizeMap
);

if ("ResizeObserver" in window) {

    const observer =
        new ResizeObserver(resizeMap);

    observer.observe(mapViewport);

}


/* =====================================
   INITIALISE
===================================== */

function initialiseMap() {

    if (mapImage.complete && mapImage.naturalWidth) {

        resizeMap();

        updateProgress();

    } else {

        mapImage.addEventListener(
            "load",
            () => {

                resizeMap();

                updateProgress();

            },
            { once: true }
        );

    }

}

initialiseMap();
PatrolApp.init({ clear: clearMapSession });
