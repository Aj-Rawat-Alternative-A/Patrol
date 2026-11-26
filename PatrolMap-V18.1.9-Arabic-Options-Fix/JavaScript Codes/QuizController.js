/**
 * LEGACY QUIZ GAME ENGINE
 * Questions, timers, single-answer locking, response time, scoring,
 * fastest-correct bonuses, results and replay controls.
 */
/* V17 quiz engine: independent module, shared monotonic deadlines, one answer per seat. */
(() => {
 const $=id=>document.getElementById(id), screen=$('quizScreen'), seats=$('quizSeats'), center=$('quizCenterBody');
 const config={questions:10,seconds:15,start:3,reveal:3};
 const dualCenter=PatrolDualCenterDisplay.create('quizCenterBody','quizCenterMirror');
 const typeLabels={image:{en:'IMAGE IDENTIFICATION',ar:'تحديد الجيل من الصورة'},history:{en:'PATROL HERITAGE',ar:'تاريخ باترول'},engineering:{en:'ENGINEERING & TECHNOLOGY',ar:'الهندسة والتقنيات'},reveal:{en:'PROGRESSIVE IMAGE REVEAL',ar:'صورة تتضح تدريجياً'}};
 const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 // Include at least one item from each question type available at the chosen difficulty.
 function roundQuestions(level,count){const pool=PatrolQuizQuestions.filter(q=>q.difficulty===level);const required=[...new Set(pool.map(q=>q.type))].map(type=>shuffle(pool.filter(q=>q.type===type))[0]);const selected=[...required];const selectedIds=new Set(selected.map(q=>q.id));for(const q of shuffle(pool)){if(selected.length>=count)break;if(!selectedIds.has(q.id)){selected.push(q);selectedIds.add(q.id);}}return shuffle(selected).slice(0,count).map(q=>({...q,options:shuffle(q.options)}));}
 const strings={en:{player:'Player',empty:'Available seat',locked:'Answer locked — waiting',question:'Question',correct:'Correct',wrong:'Incorrect',none:'No answer',points:'PTS',wins:'wins',fast:'Fastest correct'},ar:{player:'اللاعب',empty:'مقعد متاح',locked:'تم تثبيت الإجابة، يرجى الانتظار',question:'السؤال',correct:'إجابة صحيحة',wrong:'إجابة خاطئة',none:'لم تتم الإجابة',points:'نقطة',wins:'فوز',fast:'أسرع إجابة صحيحة'}};
 function launch(context){
   let stopped=false, interval=null, phase='', deadline=0, startedAt=0, index=0, deck=[], answers=new Map(), fastest=null, previous=new Map();
   const players=context.players.map(p=>({...p,score:0,wins:0,correct:0,time:0}));
   PatrolAdaptiveLayout.apply(screen, players);
   const active=()=>!stopped&&PatrolApp.active&&PatrolApp.sessionId===context.sessionId;
   const btn=(text,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.onclick=fn;return b;};
   const elt=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
   const refs=new Map();
   function resultsRanking(){
     const ordered=[...players].sort(compare);
     let rank=1;
     return ordered.map((p,i)=>{if(i&&compare(ordered[i-1],p)!==0)rank=i+1;return {player:p,rank};});
   }
   function rewardTier(){return {en:'REWARD PENDING',ar:'المكافأة قيد التحديد'};}
   function makePlaceholder(lang){
     const holder=elt('div',undefined,'quiz-reward-qr');
     holder.setAttribute('role','img');
     holder.setAttribute('aria-label',lang==='ar'?'رمز QR تجريبي وغير قابل للمسح':'QR placeholder, not scannable');
     holder.append(elt('strong','QR'),elt('small',lang==='ar'?'تجريبي':'PLACEHOLDER'));
     return holder;
   }

   function phaseSet(name,seconds){phase=name;startedAt=performance.now();deadline=startedAt+seconds*1000;render();}
   function start(){deck=roundQuestions(context.difficulty,config.questions);index=0;players.forEach(p=>Object.assign(p,{score:0,wins:0,correct:0,time:0}));answers=new Map();PatrolApp.setGamePlaying(true);phaseSet('countdown',config.start);}
   function question(){answers=new Map();fastest=null;phaseSet('question',config.seconds);}
   function submit(p,i){if(!active()||phase!=='question'||answers.has(p.id))return;if(performance.now()>=deadline){reveal();return;}answers.set(p.id,{i,time:performance.now()-startedAt});if(answers.size===players.length)reveal();else updateSeat(p);}
   function reveal(){if(phase!=='question')return;previous=new Map(players.map(p=>[p.id,{score:p.score,wins:p.wins}]));const q=deck[index];const correct=players.filter(p=>q.options[answers.get(p.id)?.i]?.correct).sort((a,b)=>answers.get(a.id).time-answers.get(b.id).time);fastest=correct[0]?.id||null;for(const p of correct){p.correct++;p.time+=answers.get(p.id).time;p.score+=p.id===fastest?150:100;if(p.id===fastest)p.wins++;}phaseSet('reveal',config.reveal);}
   const compare=(a,b)=>b.wins-a.wins||b.score-a.score||a.time-b.time;
   function finish(){phase='results';PatrolApp.setGamePlaying(false);render();}
   function tick(){if(!active()||phase==='results')return;const remaining=Math.max(0,deadline-performance.now());const counter=$('quizCountdown');if(counter)counter.textContent=String(Math.ceil(remaining/1000)).padStart(2,'0');const ring=$('quizRing');if(ring)ring.style.setProperty('--remaining',`${Math.min(1,remaining/((phase==='question'?config.seconds:phase==='reveal'?config.reveal:config.start)*1000))*100}%`);if(phase==='question'&&deck[index].type==='reveal')for(const im of screen.querySelectorAll('.quiz-image'))im.style.filter=`blur(${Math.min(22,22*remaining/(config.seconds*1000))}px)`;dualCenter.syncLive();if(remaining>0)return;if(phase==='countdown')question();else if(phase==='question')reveal();else if(phase==='reveal'){if(++index>=deck.length)finish();else question();}}
   function updateSeat(p){const r=refs.get(p.id);if(!r)return;const a=answers.get(p.id);const t=strings[p.language];r.buttons.forEach((b,i)=>{b.disabled=phase!=='question'||!!a;b.classList.toggle('chosen',a?.i===i);b.classList.toggle('correct-option',phase==='reveal'&&deck[index].options[i].correct);b.classList.toggle('wrong-option',phase==='reveal'&&a?.i===i&&!deck[index].options[i].correct);});if(phase==='question')r.status.textContent=a?t.locked:'';if(phase==='reveal'){
       const good=!!deck[index].options[a?.i]?.correct, win=p.id===fastest;
       r.panel.dataset.feedback=win?'fast':good?'correct':a?'wrong':'none';
       r.status.textContent=(!a?t.none:good?(win?`${t.fast} +150`:`${t.correct} +100`):t.wrong+' +0')+(a?` · ${(a.time/1000).toFixed(2)} s`:' · +0');
       const before=previous.get(p.id);if(before){const begin=performance.now();const animate=now=>{if(!active()||phase!=='reveal'||!r.score.isConnected)return;const f=matchMedia('(prefers-reduced-motion: reduce)').matches?1:Math.min(1,(now-begin)/600);r.score.textContent=`${Math.round(before.score+(p.score-before.score)*f)} ${t.points} · ${f===1?p.wins:before.wins} ${t.wins}`;if(f<1)requestAnimationFrame(animate);};requestAnimationFrame(animate);}
     }}
   function render(){
     refs.clear(); seats.replaceChildren();center.replaceChildren();const q=deck[index];
     for(let i=0;i<4;i++){const p=players.find(p=>p.seat===i);if(!p)continue;const panel=elt('section',undefined,'quiz-seat');panel.dataset.seat=i;seats.append(panel);
       const t=strings[p.language], lang=p.language;panel.lang=lang;panel.dir=lang==='ar'?'rtl':'ltr';const head=elt('header',undefined,'quiz-seat-head');const prior=phase==='reveal'?previous.get(p.id):null;const score=elt('span',`${prior?.score??p.score} ${t.points} · ${prior?.wins??p.wins} ${t.wins}`);head.append(elt('h2',`${t.player} ${i+1}`),score);panel.append(head);
       if(phase==='countdown'){panel.append(elt('p',lang==='ar'?'استعد!':'Get ready!', 'quiz-message'));continue;}
       if(phase==='results'){
         panel.classList.add('quiz-seat-results');
         const rank=resultsRanking().find(r=>r.player.id===p.id).rank;
         panel.dataset.rank=String(rank);
         panel.append(elt('div',lang==='ar'?'نتائجك النهائية':'YOUR FINAL RESULTS','quiz-result-kicker'));
         panel.append(elt('div',`${rank}${lang==='ar'?'':' / '+players.length}`,'quiz-player-rank'));
         const metrics=elt('div',undefined,'quiz-player-metrics');
         for(const [value,label] of [
           [p.correct+'/'+deck.length,lang==='ar'?'إجابات صحيحة':'CORRECT'],
           [p.score,lang==='ar'?'نقاط':'POINTS'],
           [p.wins,lang==='ar'?'انتصارات':'WINS']
         ]){const metric=elt('div',undefined,'quiz-player-metric');metric.append(elt('strong',String(value)),elt('span',label));metrics.append(metric);}
         panel.append(metrics);
         const reward=elt('div',undefined,'quiz-player-reward');reward.append(makePlaceholder(lang),elt('div',undefined,'quiz-reward-copy'));
         reward.lastChild.append(elt('strong',rewardTier()[lang]),elt('small',lang==='ar'?'QR غير مفعل · بانتظار الموافقة':'NOT SCANNABLE · AWAITING APPROVAL'));
         panel.append(reward);
         continue;
       }
       panel.append(elt('div',`${t.question} ${index+1} / ${deck.length} · ${typeLabels[q.type]?.[lang]||''}`,'quiz-question-number'),elt('h3',q[lang],'quiz-question-text'));
       if(q.image){const im=elt('img',undefined,'quiz-image');im.src=q.image;im.alt='';im.draggable=false;panel.append(im);if(q.type==='reveal'&&phase==='question')im.style.filter='blur(22px)';}else panel.append(elt('div','', 'quiz-text-space'));
       // Keep answer letters isolated from Arabic text. Embedding A/B/C/D in the
       // same RTL text node can reorder punctuation and move the letters.
       // Each label remains tied to its original shuffled option index.
       const choices=elt('div',undefined,'quiz-options');
       const buttons=q.options.map((o,j)=>{
         const b=btn('',()=>submit(p,j));
         b.classList.add('quiz-option-button');
         b.dir='ltr'; // stable flex direction; Arabic visual order is CSS-controlled
         const letter=elt('span',`${'ABCD'[j]} ·`,'quiz-option-letter');
         letter.dir='ltr';
         const answerText=elt('span',o[lang],'quiz-option-text');
         answerText.lang=lang;
         answerText.dir=lang==='ar'?'rtl':'ltr';
         b.append(letter,answerText);
         choices.append(b);
         return b;
       });
       panel.append(choices);const status=elt('p','','quiz-status');panel.append(status);refs.set(p.id,{buttons,status,panel,score});updateSeat(p);
     }
     if(phase==='countdown'||phase==='question'){const ring=elt('div',undefined,'quiz-ring');ring.id='quizRing';const n=elt('strong',String(phase==='countdown'?config.start:config.seconds).padStart(2,'0'));n.id='quizCountdown';ring.append(n,elt('small','SECONDS / ثانية'));center.append(elt('h2',phase==='countdown'?'GET READY / استعد':`QUESTION ${index+1} / ${deck.length}`),ring);const dots=elt('div',undefined,'quiz-dots');deck.forEach((_,j)=>dots.append(elt('span','',j<=index&&phase==='question'?'filled':'')));center.append(dots);}
     else if(phase==='reveal'){
       const right=q.options.find(o=>o.correct), winner=players.find(p=>p.id===fastest);
       const answer=elt('div',undefined,'quiz-reveal-answer');answer.append(elt('h2','CORRECT ANSWER / الإجابة الصحيحة'),elt('div',right.en,'quiz-answer'),elt('p',right.ar));center.append(answer);
       const fastestBox=elt('div',undefined,'quiz-fastest-box');fastestBox.classList.toggle('has-winner',!!winner);
       fastestBox.append(elt('small','FASTEST CORRECT / أسرع إجابة صحيحة'),elt('strong',winner?`PLAYER ${winner.seat+1} · اللاعب ${winner.seat+1}`:'No correct answers / لا إجابات صحيحة'));
       if(winner)fastestBox.append(elt('p',`${(answers.get(fastest).time/1000).toFixed(2)} s · +150`));center.append(fastestBox);
       const fact=elt('div',undefined,'quiz-fact');fact.append(elt('small','DID YOU KNOW? / هل تعلم؟'),elt('p',q.fact.en));const arabic=elt('p',q.fact.ar);arabic.dir='rtl';arabic.lang='ar';fact.append(arabic);center.append(fact);
       const next=elt('div',undefined,'quiz-next');next.append(elt('small',index+1===deck.length?'RESULTS / النتائج':'NEXT QUESTION / السؤال التالي'));const n=elt('strong',String(config.reveal).padStart(2,'0'));n.id='quizCountdown';next.append(n);center.append(next);
     }
     else {
       const ranked=resultsRanking(), champions=ranked.filter(r=>r.rank===1);
       const title=elt('div',undefined,'quiz-final-title');
       title.append(elt('div','★ 75 YEARS OF LEGACY ★','quiz-result-kicker'),elt('h2',champions.length===1?'CHAMPION / البطل':'JOINT CHAMPIONS / أبطال متعادلون'));
       const headline=champions.map(r=>`PLAYER ${r.player.seat+1}`).join(' + ');
       title.append(elt('strong',headline,'quiz-final-champion'),elt('p',`${champions[0].player.wins} WINS · ${champions[0].player.score} POINTS`));
       center.append(title);
       const podium=elt('div',undefined,'quiz-podium');
       for(const {player:p,rank} of ranked){
         const entry=elt('div',undefined,'quiz-podium-entry');entry.dataset.rank=String(rank);
         entry.append(elt('span',`#${rank}`),elt('strong',`PLAYER ${p.seat+1}`),elt('small',`${p.wins} WINS · ${p.score} PTS`));
         podium.append(entry);
       }
       center.append(podium);
       center.append(elt('p','WINS → POINTS → CORRECT-ANSWER TIME','quiz-ranking-note'));
       const actions=elt('div',undefined,'quiz-final-actions');
       const replay=btn('PLAY AGAIN / العب مجدداً',start);replay.className='quiz-replay';
       const exit=btn('RETURN TO MAP / العودة إلى الخريطة',()=>context.returnToMap());exit.className='quiz-return';
       actions.append(replay,exit);center.append(actions);
       center.append(elt('p','Reward tiers and QR destinations are pending approval.','quiz-ranking-note'));
     }

     dualCenter.sync();
   }
   function cleanup(){if(stopped)return;stopped=true;clearInterval(interval);screen.hidden=true;seats.replaceChildren();center.replaceChildren();dualCenter.clear();PatrolAdaptiveLayout.clear(screen);$('quizExit').onclick=null;$('quizExitMirror').onclick=null;PatrolApp.setGamePlaying(false);}
   screen.hidden=false;$('quizExit').onclick=()=>context.returnToMap();$('quizExitMirror').onclick=()=>context.returnToMap();start();interval=setInterval(tick,50);return cleanup;
 }
 PatrolGames.register('Patrol Legacy Quiz',launch);
})();
