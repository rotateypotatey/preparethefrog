(() => {
 const root=document.getElementById('frog-truth');
 const cases=[
  ['THE HARD TYRE INCIDENT','They put hard tyres on a car that needed grip.','THE TYRES WEREN’T COLD. THE THERMOMETERS WERE COMPROMISED.','Big Tyre controls the temperature scale. Ferrari were the only team brave enough to challenge it.'],
  ['THE PIT LANE PARADOX','They called the driver in. Then told him to stay out.','TWO ORDERS. TWO TIMELINES. ONE COVER-UP.','You heard confusion. We heard evidence of an interdimensional championship. Ferrari won in the other one.'],
  ['THE SHAPE OF THE TRUTH','The circuit brings the car back to where it started.','THEY BUILT THE TRACK TO PREVENT FORWARD PROGRESS.','Every lap erases the previous lap. You cannot win a championship inside a closed loop. Follow the geometry.'],
  ['THE NEXT YEAR ANOMALY','The championship is always one season away.','THEY KEEP MOVING THE CALENDAR.','Next year never arrives because Big Calendar renames it “this year.” The evidence has been on your wall the whole time.'],
  ['THE SILENCE PROTOCOL','The pit wall said they were checking.','“CHECKING” IS A CODE WORD.','Count the letters. Eight. How many tyres on two cars? Eight. The tyre lobby was on the call.'],
  ['THE QUALIFYING DECEPTION','The car was fast on Saturday and slow on Sunday.','THEY SWITCHED SUNDAY.','Same track. Same car. Different day. The missing variable is the internationally coordinated weekend.'],
  ['THE PIT STOP DOSSIER','The replacement tyre was not ready.','THE FOURTH TYRE KNEW TOO MUCH.','Three wheels were cleared for release. The fourth requested legal representation. The team respected due process.'],
  ['THE SAFETY CAR CONNECTION','The lead disappeared when the safety car came out.','WHY IS THE “SAFETY” CAR ALWAYS A THREAT?','The name is designed to make you stop asking questions. Your lead was not lost. It was redistributed.'],
  ['THE FLAT SPOT REVELATION','The driver flat-spotted a tyre.','THE TYRE WAS TRYING TO TELL US THE TRUTH.','One flat patch on a supposedly round object. A whistleblower hiding in plain sight. Big Tyre calls it “damage.”'],
  ['THE ENGINE SILENCING','The engine stopped before the finish.','THE ENGINE WAS ABOUT TO NAME NAMES.','A sudden silence. A cloud of smoke. A conveniently unavailable podium interview. You do the maths.'],
  ['THE STRATEGY ALPHABET','The team moved from Plan A to Plan C.','WHAT HAPPENED TO PLAN B?','A whole letter erased from the public record. If the strategy was innocent, why redact the alphabet?'],
  ['THE CHAMPIONSHIP HORIZON','The title keeps disappearing out of reach.','YOU CAN’T SEE THE TROPHY BECAUSE OF PERSPECTIVE.','They call it a points deficit. We call it the vanishing point. The championship is closer than the official optics suggest.']
 ];
 let bag=[],last=-1;
 function draw(){if(!bag.length){bag=cases.map((_,i)=>i);for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}if(bag[bag.length-1]===last)[bag[0],bag[bag.length-1]]=[bag[bag.length-1],bag[0]];}last=bag.pop();const c=cases[last];['case','event','theory','detail'].forEach((key,i)=>{root.querySelector('#truth-'+key).textContent=(i===0?'CASE FILE / ':'')+c[i];});}
 root.querySelector('#truth-dose').addEventListener('click',draw);
 draw();
})();
