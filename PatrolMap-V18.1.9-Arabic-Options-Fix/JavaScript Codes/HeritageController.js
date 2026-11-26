/**
 * HERITAGE EXPERIENCE
 * Per-generation introductions, optional videos, scrolling stories,
 * and collectible completion. Profile content and asset paths live here.
 */
/* V14 — reusable heritage views and independent per-generation session state. */
(() => {
 const $ = id => document.getElementById(id);
 const intro=$('heritageIntro'), screen=$('heritageScreen'), film=$('heritageVideoScreen'), video=$('heritageVideo');
 const profiles={
  "4W60": {
    "folder": "4W60",
    "ordinal": "FIRST",
    "years": "1951–1960",
    "title": "Where the legend began",
    "description": "Discover the rugged four-wheel-drive vehicle that began the Patrol story in 1951.",
    "theme": "Origins and Mount Fuji"
  },
  "60 Series": {
    "folder": "60-Series",
    "ordinal": "SECOND",
    "years": "1960–1980",
    "title": "Taking the legend global",
    "description": "Explore the generation that carried the Patrol story into new markets.",
    "theme": "Global expansion"
  },
  "160 Series": {
    "folder": "160-Series",
    "ordinal": "THIRD",
    "years": "1980–1987",
    "title": "Rugged comfort",
    "description": "Discover the next chapter of rugged capability and everyday comfort.",
    "theme": "Rugged comfort"
  },
  "Y60": {
    "folder": "Y60",
    "ordinal": "FOURTH",
    "years": "1987–1997",
    "title": "A new era of engineering",
    "description": "Explore the engineering and motorsport chapter of the Patrol story.",
    "theme": "Engineering and Dakar"
  },
  "Y61": {
    "folder": "Y61",
    "ordinal": "FIFTH",
    "years": "1997 onward",
    "title": "An icon of the Gulf",
    "description": "Discover the Super Safari and its place in Gulf desert heritage.",
    "theme": "Super Safari and Gulf heritage"
  },
  "Y62": {
    "folder": "Y62",
    "ordinal": "SIXTH",
    "years": "2010–2024",
    "title": "The luxury flagship era",
    "description": "Explore the generation that brought luxury and performance together.",
    "theme": "Luxury and performance"
  },
  "Y63": {
    "folder": "Y63",
    "ordinal": "SEVENTH",
    "years": "2024 onward",
    "title": "The legacy continues",
    "description": "Discover the seventh generation, unveiled in Abu Dhabi in 2024.",
    "theme": "The modern Patrol legacy"
  }
};
 const firstChapters=[
 ['History & Origins','Where the legend began',['In 1951, Nissan introduced the 4W60, its first four-wheel-drive vehicle.','The first generation evolved throughout the 1950s before the arrival of the 60 Series in 1960.']],
 ['Design & Evolution','Built for purpose',['Upright front end and round headlights','Practical body and canvas roof','Rugged wheels and functional cabin']],
 ['Specifications & Engineering','Engineering for rugged terrain',['Introduced: 1951','Model designation: 4W60','Drivetrain: four-wheel drive','Country of origin: Japan','Engine and dimensions: pending archive approval']],
 ['Photo Gallery','Explore the archive',[]],
 ['Interesting Facts','Stories from the beginning',['The 4W60 began the seven-generation Patrol story.','The Mount Fuji climb is a key heritage story in the project brief.','The first generation paved the way for the 60 Series.']]
 ];

 const scroll=$('heritageScroll'), collect=$('heritageCollect'), body=$('heritageBody');
 let active=false,session=0,opener=null,current=null,rendered=null;
 const progress=new Map();
 const valid=()=>active&&current&&PatrolApp.active&&session===PatrolApp.sessionId;
 const state=()=>progress.get(current);
 const profile=()=>profiles[current];
 const base=()=>`assets/Heritage/${profile().folder}/`;
 const car=()=>`assets/Cars/${profile().folder}.png`;
 function refresh(){
   if(!current)return;
   const collected=window.isPatrolCollected(current);
   $('introProgress').textContent=collected?'Already in My Garage':'';
   collect.disabled=collected||!state().reachedEnd;
   collect.textContent=collected?'Already collected':`Collect ${current}`;
 }
 function checkEnd(){
   if(!valid()||screen.hidden)return;
   state().savedScroll=scroll.scrollTop;
   if(scroll.scrollTop+scroll.clientHeight>=scroll.scrollHeight-12)state().reachedEnd=true;
   refresh();
 }
 scroll.addEventListener('scroll',checkEnd,{passive:true});
 function populate(){
   const p=profile(), kicker=`${p.ordinal} GENERATION · ${p.years}`;
   const panel=intro.querySelector('.v12-intro'), hero=screen.querySelector('.story-hero'), end=$('heritageEnd');
   for(const el of [panel,hero]){
     el.querySelector('p').textContent=kicker;
     el.querySelector('h1').textContent=current;
     el.querySelector('h2').textContent=p.title;
     el.querySelectorAll('p')[1].textContent=p.description;
     const img=el.querySelector('img');img.src=car();img.alt=`Nissan Patrol ${current}`;
   }
   film.querySelector('h2').textContent=`${current} · Heritage film`;
   scroll.setAttribute('aria-label',`Scroll through the ${current} story`);
   end.querySelector('img').src=car();
   end.querySelector('h2').textContent=current==='4W60'?'The beginning of your collection':`Add ${current} to your collection`;
   end.querySelector('p').textContent=`Add the ${p.ordinal.toLowerCase()} generation to My Garage.`;
 }
 function getChapters(){
   if(current==='4W60')return firstChapters;
   const p=profile();
   return [
     ['History & Origins',p.title,[p.description,`Heritage period: ${p.years}. Detailed timeline awaiting approved archive content.`]],
     ['Design & Evolution','Discover the generation',['Explore the vehicle exterior, interior and design evolution. Detailed design notes and archive photographs to be supplied.']],
     ['Specifications & Engineering','A closer look',[`Model designation: ${current}`,`Generation: ${p.ordinal.toLowerCase()}`,`Period: ${p.years}`,'Powertrain: pending approval','Drivetrain details: pending approval','Dimensions: pending approval']],
     ['Photo Gallery','Explore the archive',[]],
     ['Interesting Facts','Stories behind the legend',[`Heritage theme: ${p.theme}.`,'Additional facts and milestones will be added after archive approval.']]
   ];
 }
 function renderStory(){
   if(rendered===current&&body.children.length)return;
   body.replaceChildren();rendered=current;
   const chapters=getChapters(), folder=base(), fallback=car(), generation=current;
   const groups=[[0,[1,2]],[1,[3,4]],[2,[5]],[4,[6]]];
   for(const [i,photos] of groups){
     const section=document.createElement('section');section.className='story-section';
     const kicker=document.createElement('p');kicker.className='story-kicker';kicker.textContent=chapters[i][0];
     const heading=document.createElement('h2');heading.textContent=chapters[i][1];section.append(kicker,heading);
     const text=document.createElement('div');text.className=i===2?'story-specs':'story-copy';
     for(const line of chapters[i][2]){const p=document.createElement('p');p.textContent=line;text.append(p);}section.append(text);
     const images=document.createElement('div');images.className='story-photos';
     for(const n of photos){
       const figure=document.createElement('figure'),img=document.createElement('img');
       img.alt=`${generation} heritage photograph ${n}`;img.draggable=false;
       img.onerror=()=>{img.onerror=()=>{img.hidden=true;};figure.classList.add('photo-unavailable');img.alt=`${generation} placeholder vehicle illustration`;img.src=fallback;const label=document.createElement('span');label.className='placeholder-label';label.textContent=`Archive photo ${n} · Placeholder`;figure.append(label);};
       img.src=folder+`Photo-${String(n).padStart(2,'0')}.jpg`;figure.append(img);images.append(figure);
     }section.append(images);body.append(section);
   }
 }
 function stopFilm(){video.pause();video.removeAttribute('src');video.load();PatrolApp.setMediaPlaying(false);}
 function showIntro(){if(!valid())return;if(!screen.hidden)checkEnd();stopFilm();film.hidden=true;screen.hidden=true;intro.hidden=false;refresh();$('introExplore').focus();}
 function close(restore=true){if(valid()&&!screen.hidden)checkEnd();active=false;stopFilm();intro.hidden=screen.hidden=film.hidden=true;if(PatrolApp.active){$('app').inert=false;if(restore&&opener?.isConnected)opener.focus();}opener=null;}
 document.addEventListener('patrol:heritage-request',e=>{
   const id=e.detail.id;if(!Object.hasOwn(profiles,id)||!PatrolApp.active||e.detail.sessionId!==PatrolApp.sessionId)return;
   session=e.detail.sessionId;current=id;active=true;opener=document.activeElement;
   if(!progress.has(id))progress.set(id,{savedScroll:0,reachedEnd:false});
   $('activityModal').classList.remove('active');$('app').inert=true;populate();showIntro();
 });
 $('introClose').onclick=()=>close();$('heritageBack').onclick=showIntro;$('videoBack').onclick=showIntro;
 $('introExplore').onclick=()=>{if(!valid())return;intro.hidden=true;screen.hidden=false;renderStory();scroll.scrollTop=state().savedScroll;refresh();$('heritageBack').focus({preventScroll:true});requestAnimationFrame(checkEnd);};
 $('introVideo').onclick=()=>{if(!valid())return;intro.hidden=true;film.hidden=false;$('videoMessage').textContent='Optional film. No effect on collection progress.';video.src=base()+'Heritage-Video.mp4';video.play().catch(()=>{});$('videoBack').focus({preventScroll:true});};
 video.addEventListener('playing',()=>{if(valid()&&!film.hidden)PatrolApp.setMediaPlaying(true);});
 for(const event of ['pause','ended','waiting','stalled','error','emptied'])video.addEventListener(event,()=>{PatrolApp.setMediaPlaying(false);if(event==='error'&&!film.hidden)$('videoMessage').textContent='Heritage film coming soon. You can still explore and unlock the car.';});
 collect.onclick=()=>{if(!valid()||screen.hidden||!state().reachedEnd||window.isPatrolCollected(current))return;const token=session,id=current;close(false);window.completeHeritage(id,token);};
 for(const event of ['patrol:session-start','patrol:session-end'])document.addEventListener(event,()=>{close(false);progress.clear();current=null;rendered=null;body.replaceChildren();scroll.scrollTop=0;collect.disabled=true;});
})();
