/**
 * GENERATION MATCH GAME ENGINE
 * Four independent pointer/tap boards; 14 temporary front/rear tiles;
 * 90-second shared clock; +3s per incorrect match; adjusted-time ranking.
 * Change ROUND_SECONDS / PENALTY_SECONDS near the top to tune gameplay.
 */
/* V18 — Generation Match prototype. Four independent pointer-driven matching boards. */
(() => {
 'use strict';
 const $ = id => document.getElementById(id);
 const screen = $('generationMatchScreen');
 const seats = $('gmSeats'), center = $('gmCenterBody');
 const dualCenter=PatrolDualCenterDisplay.create('gmCenterBody','gmCenterMirror');
 const GENERATIONS = [
   {id:'4W60', en:'4W60', ar:'4W60', year:'1951', asset:'4W60 Series'},
   {id:'60', en:'60 Series', ar:'سلسلة 60', year:'1960', asset:'60 Series'},
   {id:'160', en:'160 Series', ar:'سلسلة 160', year:'1980', asset:'160 Series'},
   {id:'Y60', en:'Y60', ar:'Y60', year:'1987', asset:'Y60'},
   {id:'Y61', en:'Y61', ar:'Y61', year:'1997', asset:'Y61'},
   {id:'Y62', en:'Y62', ar:'Y62', year:'2010', asset:'Y62'},
   {id:'Y63', en:'Y63', ar:'Y63', year:'2024', asset:'Y63'}
 ];
 const ROUND_SECONDS=90, PENALTY_SECONDS=3, START_SECONDS=3;
 const shuffle=arr=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 const el=(tag,cls,content)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(content!==undefined)node.textContent=content;return node;};
 const button=(label,callback,cls)=>{const node=el('button',cls,label);node.type='button';node.addEventListener('click',callback);return node;};
 const fmt=sec=>`${sec.toFixed(1)}s`;
 const translations={
  en:{matched:'MATCHED',mistakes:'MISTAKES',drag:'DRAG EACH VEHICLE TO ITS GENERATION',finished:'BOARD COMPLETE',awaiting:'Waiting for other players',correct:'MATCHED',wrong:'WRONG MATCH · +3s',rank:'RANKING',timeout:'TIME EXPIRED',complete:'ROUND COMPLETE',replay:'PLAY AGAIN',exit:'RETURN TO MAP',placeholder:'QR PLACEHOLDER',reward:'REWARD PENDING',unfinished:'INCOMPLETE',seconds:'SECONDS LEFT'},
  ar:{matched:'تمت المطابقة',mistakes:'الأخطاء',drag:'اسحب كل مركبة إلى جيلها',finished:'اكتملت اللوحة',awaiting:'بانتظار اللاعبين الآخرين',correct:'مطابقة صحيحة',wrong:'مطابقة خاطئة · +٣ ث',rank:'الترتيب',timeout:'انتهى الوقت',complete:'اكتملت الجولة',replay:'العب مجدداً',exit:'العودة إلى الخريطة',placeholder:'رمز QR تجريبي',reward:'المكافأة قيد التحديد',unfinished:'غير مكتمل',seconds:'ثوانٍ متبقية'}
 };
 function launch(context){
  PatrolAdaptiveLayout.apply(screen, context.players);
  let stopped=false,phase='countdown',roundStart=0,countdownStart=performance.now(),timer=null,boards=[];
  const drags=new Map();
  const live=()=>!stopped&&PatrolApp.active&&PatrolApp.sessionId===context.sessionId;
  const bySeat=seat=>boards.find(p=>p.seat===seat);
  const color=['#e7aa39','#4aa7a2','#929c4e','#5689b7'];
  const imgFor=(id,view)=>{
    const gen=GENERATIONS.find(g=>g.id===id);
    return `assets/GenerationMatch/${gen.asset.replaceAll(' ','-')}-${view}.png`;
  };
  function makeBoard(p){
   const host=el('section','gm-seat');host.dataset.seat=p.seat;host.style.setProperty('--gm-seat-color',color[p.seat]);host.dir=p.language==='ar'?'rtl':'ltr';host.lang=p.language;
   if(p.empty){host.classList.add('empty');host.append(el('h2','',`PLAYER ${p.seat+1}`),el('p','', 'Available seat / مقعد متاح'));return host;}
   const words=translations[p.language];
   const top=el('div','gm-seat-head');top.append(el('h2','',p.language==='ar'?`اللاعب ${p.seat+1}`:`PLAYER ${p.seat+1}`),el('span','gm-seat-score',`0 / 14 ${words.matched} · 0 ${words.mistakes}`));host.append(top);
   if(phase==='countdown'){host.classList.add('gm-waiting');host.append(el('h3','',p.language==='ar'?'استعد!':'GET READY!'));return host;}
   if(phase==='results'){
     host.classList.add('gm-result-seat');
     const rank=standings().find(row=>row.id===p.id)?.rank||'-';
     const mark=el('div','gm-finish-badge',p.completed?`#${rank} · ${words.finished}`:`${words.unfinished} · ${p.count}/14`);
     const big=el('strong','gm-final-time',p.completed?fmt(p.finalTime):'—');
     const desc=el('div','gm-finish-detail',p.completed?`${fmt(p.elapsed)} + ${p.mistakes} × ${PENALTY_SECONDS}s`:`${p.count}/14 ${words.matched} · ${p.mistakes} ${words.mistakes}`);
     const qr=el('div','gm-qr-placeholder');qr.setAttribute('role','img');qr.setAttribute('aria-label','Placeholder only; not a scannable QR code');qr.append(el('strong','', 'QR'),el('small','', words.placeholder));
     host.append(mark,el('div','gm-result-medal','75'),big,desc,el('div','gm-reward-row',''),qr,el('small','gm-reward-caption',words.reward));return host;
   }
   const tray=el('div','gm-source-grid');tray.setAttribute('aria-label','Vehicle tiles');
   p.tiles.forEach(tile=>{
     const b=el('button','gm-tile');b.type='button';b.dataset.tile=tile.id;b.dataset.generation=tile.generation;b.dataset.seat=p.seat;
     const image=el('img');image.src=imgFor(tile.generation,tile.view);image.alt='';image.draggable=false;b.append(image);
     b.setAttribute('aria-label',`Vehicle view ${tile.view} — select then select a generation slot`);
     if(p.placed.has(tile.id)){b.classList.add('gm-tile-placed');b.disabled=true;}
     b.addEventListener('pointerdown',ev=>startDrag(ev,p,tile,b));
     b.addEventListener('click',()=>{
       if(!live()||phase!=='playing'||p.completed||p.placed.has(tile.id))return;
       if(b.dataset.suppressClick==='true'){delete b.dataset.suppressClick;return;}
       p.selected=tile.id;highlightSelected(p);
     });
     tray.append(b);
   });
   host.append(tray,el('div','gm-instruction',words.drag));
   const targets=el('div','gm-targets');
   GENERATIONS.forEach(g=>{
     const col=el('div','gm-generation');col.append(el('strong','',g.en),el('small','',g.year));
     for(let slot=0;slot<2;slot++){
       const target=el('button','gm-drop');target.type='button';target.dataset.target=g.id;target.dataset.seat=p.seat;
       const match=p.matches.find(item=>item.generation===g.id&&item.slot===slot);
       if(match){target.classList.add('filled');const image=el('img');image.src=imgFor(match.generation,match.view);image.alt='';image.draggable=false;target.append(image);target.disabled=true;}
       else target.append(el('span','', '+'));
       target.setAttribute('aria-label',`${g.en}, slot ${slot+1}`);
       target.addEventListener('click',()=>{
         if(p.selected){attempt(p,p.selected,g.id,slot);p.selected=null;}
       });
       col.append(target);
     }
     targets.append(col);
   });
   host.append(targets,el('p','gm-feedback',p.feedback||''));
   return host;
  }
  function highlightSelected(p){
   const host=seats.querySelector(`.gm-seat[data-seat="${p.seat}"]`);
   host?.querySelectorAll('.gm-tile').forEach(btn=>btn.classList.toggle('selected',btn.dataset.tile===p.selected));
  }
  function attempt(p,tileId,generation,slot){
    if(!live()||phase!=='playing'||p.completed||p.placed.has(tileId))return;
    if(performance.now()-roundStart>=ROUND_SECONDS*1000){finish();return;}
    const tile=p.tiles.find(t=>t.id===tileId);
    if(!tile||p.matches.some(m=>m.generation===generation&&m.slot===slot))return;
    p.selected=null;
    if(tile.generation!==generation){p.mistakes++;p.feedback=translations[p.language].wrong;renderBoards();return;}
    p.placed.add(tileId);p.matches.push({tileId,generation,slot,view:tile.view});p.count++;
    p.feedback=translations[p.language].correct;
    if(p.count===14){p.completed=true;p.elapsed=(performance.now()-roundStart)/1000;p.finalTime=p.elapsed+PENALTY_SECONDS*p.mistakes;p.feedback=translations[p.language].finished;}
    renderBoards();
    if(boards.every(b=>b.completed))finish();
  }
  function startDrag(ev,p,tile,source){
    if(!live()||phase!=='playing'||p.completed||p.placed.has(tile.id)||ev.button!==0)return;
    if(drags.has(ev.pointerId))return;
    ev.preventDefault();
    const clone=source.cloneNode(true);clone.classList.add('gm-dragging');clone.disabled=true;document.body.append(clone);
    drags.set(ev.pointerId,{pointerId:ev.pointerId,p,tile,source,clone,startX:ev.clientX,startY:ev.clientY,suppressClick:false});
    positionDrag(ev);
    source.setPointerCapture(ev.pointerId);
  }
  function positionDrag(ev){const drag=drags.get(ev.pointerId);if(!drag)return;drag.clone.style.left=`${ev.clientX}px`;drag.clone.style.top=`${ev.clientY}px`;} 
  function moveDrag(ev){const drag=drags.get(ev.pointerId);if(!drag)return;positionDrag(ev);if(Math.abs(ev.clientX-drag.startX)+Math.abs(ev.clientY-drag.startY)>8)drag.suppressClick=true;}
  function stopDrag(ev){
    const current=drags.get(ev.pointerId);if(!current)return;drags.delete(ev.pointerId);current.clone.remove();
    const target=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('.gm-drop');
    if(target&&Number(target.dataset.seat)===current.p.seat&& !target.disabled){
      const col=target.parentElement;const slot=[...col.querySelectorAll('.gm-drop')].indexOf(target);
      attempt(current.p,current.tile.id,target.dataset.target,slot);
      current.p.selected=null;
    } else if(current.suppressClick){current.p.feedback='';}
    // Click selection remains available for users who cannot drag.
    if(current.suppressClick){current.source.dataset.suppressClick='true';setTimeout(()=>{if(current.source.isConnected)delete current.source.dataset.suppressClick;},0);}
  }
  function cancelledDrag(ev){const drag=drags.get(ev.pointerId);if(!drag)return;drag.clone.remove();drags.delete(ev.pointerId);}
  function renderBoards(){
    if(!live())return;
    seats.replaceChildren();
    for(let i=0;i<4;i++){const player=bySeat(i);if(player)seats.append(makeBoard(player));}
    for(const p of boards){const head=seats.querySelector(`.gm-seat[data-seat="${p.seat}"] .gm-seat-score`);if(head)head.textContent=`${p.count} / 14 ${translations[p.language].matched} · ${p.mistakes} ${translations[p.language].mistakes}`;}
    renderCenter();
  }
  function standings(){
    const ranked=[...boards].sort((a,b)=>Number(b.completed)-Number(a.completed)||(a.completed?a.finalTime-b.finalTime:b.count-a.count)||a.mistakes-b.mistakes||a.seat-b.seat);
    let rank=1;
    return ranked.map((p,i)=>{if(i&&!(p.completed===ranked[i-1].completed&&(p.completed?Math.abs(p.finalTime-ranked[i-1].finalTime)<0.001:p.count===ranked[i-1].count&&p.mistakes===ranked[i-1].mistakes)))rank=i+1;return {...p,rank};});
  }
  function renderCenter(){
    center.replaceChildren();
    if(phase==='countdown'){
      center.append(el('div','gm-center-message','GET READY / استعد'),el('div','gm-counter',String(Math.ceil(START_SECONDS-(performance.now()-countdownStart)/1000)).padStart(2,'0')));
      dualCenter.sync();return;
    }
    if(phase==='results'){
      const ranks=standings(),first=ranks[0],joint=ranks.filter(p=>p.rank===1&&p.completed);center.append(el('div','gm-center-message','ROUND COMPLETE / اكتملت الجولة'));
      center.append(el('h2','gm-champion',first?.completed?(joint.length>1?`TIED: ${joint.map(p=>`P${p.seat+1}`).join(' + ')}`:`PLAYER ${first.seat+1} WINS`):'TIME EXPIRED'));
      center.append(el('div','gm-champion-time',first?.completed?fmt(first.finalTime):'—'));
      const list=el('div','gm-rank-list');ranks.forEach(p=>list.append(el('div','gm-rank-row',`#${p.rank} · PLAYER ${p.seat+1} · ${p.completed?fmt(p.finalTime):`${p.count}/14`}`)));center.append(list);
      center.append(el('p','gm-center-note','Final time = completion time + 3s per mistake. Incomplete boards rank below finished boards.'));
      center.append(button('PLAY AGAIN / العب مجدداً',start,'gm-main-action'),button('RETURN TO MAP / العودة إلى الخريطة',()=>context.returnToMap(),'gm-secondary-action'));
      dualCenter.sync();return;
    }
    const sec=Math.max(0,Math.ceil((ROUND_SECONDS*1000-(performance.now()-roundStart))/1000));
    const ring=el('div','gm-counter',String(sec).padStart(2,'0'));ring.id='gmCount';center.append(ring,el('p','gm-counter-label','SECONDS LEFT / ثوانٍ متبقية'));
    center.append(el('h3','gm-center-message','MATCH IN PROGRESS / اللعبة جارية'));
    const list=el('div','gm-rank-list');standings().forEach(p=>list.append(el('div','gm-rank-row',`P${p.seat+1}   ${p.count}/14   ${p.mistakes} mistakes`)));center.append(list);
    center.append(el('p','gm-center-note','First complete all 14. Lowest adjusted time wins. Wrong match: +3s.'));
    dualCenter.sync();
  }
  function finish(){if(phase==='results'||stopped)return;phase='results';PatrolApp.setGamePlaying(false);renderBoards();}
  function tick(){
    if(!live()||phase==='results')return;
    if(phase==='countdown'){
      const sec=Math.max(0,Math.ceil(START_SECONDS-(performance.now()-countdownStart)/1000));
      const counter=center.querySelector('.gm-counter');if(counter)counter.textContent=String(sec).padStart(2,'0');
      dualCenter.syncLive();
      if(sec===0){phase='playing';roundStart=performance.now();renderBoards();}
      return;
    }
    const left=Math.max(0,ROUND_SECONDS-(performance.now()-roundStart)/1000);
    const counter=$('gmCount');if(counter)counter.textContent=String(Math.ceil(left)).padStart(2,'0');
    dualCenter.syncLive();
    if(left<=0)finish();
  }
  function start(){
    if(!live())return;
    for(const drag of drags.values())drag.clone.remove();drags.clear();
    phase='countdown';countdownStart=performance.now();boards=context.players.map(p=>{
      const tiles=shuffle(GENERATIONS.flatMap(g=>[0,1].map(view=>({id:`${g.id}-${view}`,generation:g.id,view:view?'B':'A'}))));
      return {...p,tiles,placed:new Set(),matches:[],mistakes:0,count:0,completed:false,selected:null,feedback:'',elapsed:null,finalTime:null};
    });
    PatrolApp.setGamePlaying(true);renderBoards();
  }
  function cleanup(){
    if(stopped)return;stopped=true;clearInterval(timer);
    for(const drag of drags.values())drag.clone.remove();drags.clear();
    document.removeEventListener('pointermove',moveDrag,true);
    document.removeEventListener('pointerup',stopDrag,true);
    document.removeEventListener('pointercancel',cancelledDrag,true);
    screen.hidden=true;seats.replaceChildren();center.replaceChildren();dualCenter.clear();PatrolAdaptiveLayout.clear(screen);$('gmExit').onclick=null;$('gmExitMirror').onclick=null;PatrolApp.setGamePlaying(false);
  }
  screen.hidden=false;
  $('gmExit').onclick=()=>context.returnToMap();
  $('gmExitMirror').onclick=()=>context.returnToMap();
  document.addEventListener('pointermove',moveDrag,true);
  document.addEventListener('pointerup',stopDrag,true);
  document.addEventListener('pointercancel',cancelledDrag,true);
  start();timer=setInterval(tick,70);
  return cleanup;
 }
 PatrolGames.register('Generation Match',launch);
})();
