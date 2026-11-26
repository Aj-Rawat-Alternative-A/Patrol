/**
 * SHARED MULTIPLAYER LOBBY
 * Four fixed seats, ready/join states, EN/AR per-player language,
 * shared difficulty and handoff to Quiz or Generation Match.
 */
/* V16.1: session-scoped player lobby and explicit module handoff. */
(() => {
    'use strict';
    const $ = id => document.getElementById(id);
    const screen = $('gameLobby'), seats = $('lobbySeats'), start = $('lobbyStart');
    const map = $('app');
    const supported = new Set(['Patrol Legacy Quiz', 'Generation Match']);
    const modules = new Map();
    const emptyPlayers = () => Array.from({length:4}, (_,seat) => ({seat, id:`P${seat+1}`, language:'en', joined:false, ready:false, score:0}));
    let difficulty = 'entry';
    const difficultyButtons = [...$('lobbyDifficulty').querySelectorAll('button')];
    let players = emptyPlayers(), game = null, owner = null, session = null, running = false, cleanup = null;
    const words = {
        en:{player:'Player',join:'Join / انضم',leave:'Leave',ready:'Ready',unready:'Not ready',waiting:'Choose your language',joined:'Joined',open:'Available',test:'Lobby ready',score:'Score',back:'Back to lobby'},
        ar:{player:'اللاعب',join:'انضم / Join',leave:'مغادرة',ready:'جاهز',unready:'غير جاهز',waiting:'اختر لغتك',joined:'تم الانضمام',open:'متاح',test:'ردهة جاهزة',score:'النقاط',back:'العودة إلى الردهة'}
    };
    const valid = () => PatrolApp.active && session === PatrolApp.sessionId && game !== null;
    const activePlayers = () => players.filter(p=>p.joined).map(p=>({...p}));
    const canStart = () => activePlayers().length > 0 && activePlayers().every(p=>p.ready);
    function makeButton(text, action, pressed, cls='') {
        const b=document.createElement('button'); b.type='button'; b.textContent=text; b.className=cls;
        if (pressed !== undefined) b.setAttribute('aria-pressed',String(pressed));
        b.addEventListener('click',action); return b;
    }
    function render() {
        seats.replaceChildren();
        for (const p of players) {
            const t=words[p.language], panel=document.createElement('section');
            panel.className='lobby-seat'; panel.dataset.seat=p.seat;panel.dataset.joined=p.joined;panel.dataset.ready=p.ready;
            panel.lang=p.language; panel.dir=p.language==='ar'?'rtl':'ltr';
            const header=document.createElement('div');header.className='lobby-seat-header';
            const h=document.createElement('h2');h.textContent=`${t.player} ${p.seat+1}`;
            const state=document.createElement('span');state.className='seat-state';state.textContent=p.ready?t.ready:p.joined?t.joined:t.open;
            header.append(h,state);panel.append(header);
            if (running) {
                const msg=document.createElement('p');msg.textContent=p.joined?`${t.score}: ${p.score}`:t.open;panel.append(msg);
                continueSeat(panel);continue;
            }
            const lang=document.createElement('div');lang.className='seat-row';
            for(const [code,label] of [['en','English'],['ar','العربية']]) lang.append(makeButton(label,()=>{if(valid()){if(p.language!==code){p.language=code;p.ready=false;render();}}},p.language===code));
            panel.append(lang);
            const actions=document.createElement('div');actions.className='seat-row';
            if(!p.joined) actions.append(makeButton(t.join,()=>{if(valid()){p.joined=true;render();}},undefined,'lobby-primary'));
            else {
                actions.append(makeButton(p.ready?t.unready:t.ready,()=>{if(valid()){p.ready=!p.ready;render();}},p.ready,'lobby-primary'));
                actions.append(makeButton(t.leave,()=>{if(valid()){p.joined=p.ready=false;p.score=0;render();}}));
            }
            panel.append(actions);continueSeat(panel);
        }
        difficultyButtons.forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.difficulty===difficulty));b.disabled=running;});
        const joined=activePlayers().length, ready=players.filter(p=>p.joined&&p.ready).length;
        $('lobbyStatus').textContent=running?'Module handoff ready · Gameplay coming next':`${joined}/4 joined · ${ready}/${joined} ready`;
        start.disabled=running?false:!canStart();
        start.textContent=running?'Back to lobby / العودة إلى الردهة':'Start game / ابدأ اللعبة';
        function continueSeat(panel){seats.append(panel);}
    }
    function stopModule(){const fn=cleanup;cleanup=null;if(typeof fn==='function'){try{fn();}catch(error){console.error(error);}}}
    function close(restore=true){
        stopModule();screen.hidden=true;players=emptyPlayers();difficulty='entry';game=null;session=null;running=false;
        if(PatrolApp.active){map.inert=false;if(restore&&owner?.isConnected)owner.focus();}owner=null;
    }
    function open(event){
        const {name,sessionId}=event.detail||{};
        if(!PatrolApp.active||sessionId!==PatrolApp.sessionId||!supported.has(name)||!screen.hidden)return;
        owner=document.activeElement;session=sessionId;game=name;players=emptyPlayers();difficulty='entry';running=false;
        $('lobbyTitle').textContent=name;
        $('lobbyInstructions').textContent='Join from your side of the table. Choose your language and mark yourself ready.';
        map.inert=true;screen.hidden=false;render();
        seats.querySelector('button')?.focus({preventScroll:true});
    }
    difficultyButtons.forEach(b=>b.addEventListener('click',()=>{
        if(!valid()||running||difficulty===b.dataset.difficulty)return;
        difficulty=b.dataset.difficulty;
        players.forEach(p=>p.ready=false);
        render();
    }));
    start.addEventListener('click',()=>{
        if(!valid())return;
        if(running){stopModule();running=false;players.forEach(p=>p.score=0);render();return;}
        if(!canStart())return;
        const snapshot=activePlayers(), launchSession=session, launchGame=game;
        running=true;render();
        const module=modules.get(game);
        const context={game,sessionId:session,players:snapshot,difficulty,
            setScore(id,score){if(valid()&&running&&session===launchSession&&game===launchGame&&Number.isFinite(score)){const p=players.find(p=>p.joined&&p.id===id);if(p){p.score=score;render();}}},
            returnToMap(){if(valid()&&session===launchSession&&game===launchGame)close();},
            returnToLobby(){if(valid()&&session===launchSession&&game===launchGame){stopModule();running=false;screen.hidden=false;render();}}};
        if(module){try{screen.hidden=true;cleanup=module(context);}catch(error){console.error(error);screen.hidden=false;running=false;render();}}
        document.dispatchEvent(new CustomEvent('patrol:game-start',{detail:{game,sessionId:session,players:snapshot,difficulty}}));
    });
    $('lobbyBack').addEventListener('click',()=>close());
    screen.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}});
    document.addEventListener('patrol:game-request',open);
    document.addEventListener('patrol:session-end',()=>close(false));
    document.addEventListener('patrol:session-start',()=>{if(game!==null)close(false);});
    window.PatrolGames={register(name,launch){if(!supported.has(name)||typeof launch!=='function')throw new TypeError('Invalid game module');modules.set(name,launch);}};
})();
