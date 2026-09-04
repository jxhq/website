const translations = {
  nl: {
    navWork:'Projecten', navTools:'Tools', navAbout:'Over JXHQ', navContact:'Contact',
    eyebrow:'Software, systemen & nuttige omwegen', heroA:'Ik bouw dingen', heroB:'die gewoon werken',
    intro:'JXHQ is de digitale werkplaats van Justin Pooters: webapps, automatisering en kleine tools die een irritant probleem uit de wereld helpen.',
    seeWork:'Bekijk het werk', openTools:'Open de gereedschapskist', selected:'Geselecteerd werk', selectedTitle:'Gebouwd met een reden.',
    selectedCopy:'Geen verzonnen cases. Gewoon echte projecten, actieve diensten en experimenten die uit de hand liepen.',
    client:'Klantproject', service:'Eigen dienst', project:'Persoonlijk project',
    hwCopy:'Een heldere website en praktische online dienstverlening voor een witgoedmonteur in Groningen.',
    statusCopy:'Open-source monitoring voor websites, diensten, databases en DNS — inclusief historie en incidenten.',
    toolsCopy:'Acht privacyvriendelijke hulpmiddelen voor ontwikkelaars en nieuwsgierige mensen.', visit:'Bekijken',
    toolEyebrow:'Gereedschapskist', toolTitle:'Kleine tools. Geen account.',
    toolIntro:'Voor dat ene klusje waarvoor je geen advertentieplatform met een login nodig hebt.', allTools:'Alle tools bekijken',
    aboutEye:'Waarom JXHQ bestaat', aboutTitle:'Nieuwsgierigheid, maar dan deployed.',
    aboutCopy:'JXHQ is geen groot bureau met een pingpongtafel en vijf lagen overleg. Het is waar ik ideeën uitprobeer, software publiceer en soms iets nuttigs voor een ander bouw.',
    aboutNote:'Kleine footprint. Korte lijnen. Verdacht veel koffie.', contactEye:'Een idee, probleem of interessante zijweg?',
    contactTitle:'Zeg hallo!', contactCopy:'Een duidelijk plan is welkom. Een half idee op een servetje ook.',
    mail:'Stuur een mail', footer:'Nog steeds nieuwsgierig. Nog steeds aan het bouwen.', language:'Taal',
    coffeeTitle:'Koffiestatus', coffeeState:'Nominaal cafeïnehoudend', coffeeIntro:'Een volledig onnodig overzicht van de belangrijkste infrastructuur achter JXHQ.', cups:'Kopjes vandaag', fuel:'Primaire brandstof', uptime:'Beschikbaarheid', coffeeNote:'Handmatig gemeten. Resultaten kunnen per maandag verschillen.', back:'Terug naar JXHQ'
  },
  en: {
    navWork:'Work', navTools:'Tools', navAbout:'About JXHQ', navContact:'Contact',
    eyebrow:'Software, systems & useful detours', heroA:'I build things', heroB:'that simply work',
    intro:'JXHQ is Justin Pooters’ digital workshop: web apps, automation and small tools that make an annoying problem disappear.',
    seeWork:'See the work', openTools:'Open the toolbox', selected:'Selected work', selectedTitle:'Built for a reason.',
    selectedCopy:'No imaginary case studies. Just real projects, active services and experiments that got slightly out of hand.',
    client:'Client project', service:'Own service', project:'Personal project',
    hwCopy:'A clear website and practical online service for an appliance repair specialist in Groningen.',
    statusCopy:'Open-source monitoring for websites, services, databases and DNS — including history and incidents.',
    toolsCopy:'Eight privacy-friendly utilities for developers and curious people.', visit:'Visit',
    toolEyebrow:'Toolbox', toolTitle:'Small tools. No account.',
    toolIntro:'For that one job that does not need an advertising platform with a login.', allTools:'View all tools',
    aboutEye:'Why JXHQ exists', aboutTitle:'Curiosity, but deployed.',
    aboutCopy:'JXHQ is not a big agency with a ping-pong table and five layers of meetings. It is where I try ideas, publish software and occasionally build something useful for someone else.',
    aboutNote:'Small footprint. Short lines. Suspicious amounts of coffee.', contactEye:'An idea, problem or interesting detour?',
    contactTitle:'Just say hello.', contactCopy:'A clear plan is welcome. So is half an idea on a napkin.',
    mail:'Send an email', footer:'Still curious. Still building.', language:'Language',
    coffeeTitle:'Coffee status', coffeeState:'Nominally caffeinated', coffeeIntro:'A completely unnecessary overview of the most important infrastructure behind JXHQ.', cups:'Cups today', fuel:'Primary fuel', uptime:'Availability', coffeeNote:'Measured manually. Results may vary on Mondays.', back:'Back to JXHQ'
  }
};
function setLanguage(lang){if(!translations[lang])lang='nl';document.documentElement.lang=lang;localStorage.setItem('jxhq-language',lang);document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value)el.textContent=value});document.querySelectorAll('[data-lang]').forEach(btn=>{const active=btn.dataset.lang===lang;btn.classList.toggle('lang-active',active);btn.setAttribute('aria-pressed',String(active))});document.dispatchEvent(new CustomEvent('jxhq:language',{detail:{lang}}))}
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('jxhq-language')||((navigator.language||'').toLowerCase().startsWith('nl')?'nl':'en'));
document.getElementById('year')?.append(new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
console.log('%c JXHQ %c You found the workshop. Please mind the loose semicolons. ','background:#ff3b3b;color:white;font-weight:900;font-size:18px;padding:6px','background:#111313;color:#f4f1eb;padding:6px');
console.log('%c psst… %c ↑ ↑ ↓ ↓ ← → ← → B A','color:#ff3b3b;font-weight:900','color:#777;font-family:monospace');
const konami=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let konamiIndex=0;
document.addEventListener('keydown',event=>{const key=event.key.length===1?event.key.toLowerCase():event.key;if(key===konami[konamiIndex]){konamiIndex++;if(konamiIndex===konami.length){konamiIndex=0;document.body.classList.toggle('konami-mode');console.log('%c KONAMI ACCEPTED %c Achievement unlocked: production has feelings.','background:#ff3b3b;color:#fff;font-size:22px;font-weight:900;padding:8px','background:#111313;color:#f4f1eb;font-size:14px;padding:10px');const note=document.createElement('div');note.className='konami-toast';note.textContent='↑ ↑ ↓ ↓ ← → ← → B A — achievement unlocked';document.body.append(note);setTimeout(()=>note.remove(),3500)}}else konamiIndex=key===konami[0]?1:0});
