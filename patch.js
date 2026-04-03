(function(){
'use strict';
/* CSS */
var s=document.createElement('style');
s.textContent='.qc{border-radius:1rem;overflow:hidden;box-shadow:0 4px 20px rgba(1,105,111,.18);border:1.5px solid rgba(1,105,111,.25);background:#fff;display:flex!important;flex-direction:column;opacity:1!important;transform:none!important;visibility:visible!important}.qc:hover{transform:translateY(-3px)!important}.qcov{height:190px;overflow:hidden;background:#f3f0ec;position:relative;flex-shrink:0}.qcov img{width:100%;height:100%;object-fit:cover;display:block}.qbdg{position:absolute;top:.75rem;left:.75rem;background:rgba(1,105,111,.88);color:#fff;font-size:.68rem;font-weight:700;padding:.3rem .75rem;border-radius:999px;z-index:1}.qbody{padding:1.2rem;display:flex;flex-direction:column;flex:1}.qcity{font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;color:#01696f;font-weight:700;margin-bottom:.3rem}.qc h3.qtitle{font-family:var(--font-display,Georgia,serif);font-size:1.1rem;font-weight:600;margin:0 0 .5rem;line-height:1.3;color:#1a1916}.qloc,.qsch{font-size:.78rem;color:#5c5953;margin-bottom:.4rem;display:flex;align-items:center;gap:.3rem}.qloc a{color:#01696f;text-decoration:none;font-weight:600;margin-left:.2rem}.qdesc{font-size:.8rem;color:#3d3a35;line-height:1.6;margin-bottom:.8rem}.qtog{background:none;border:1.5px solid rgba(1,105,111,.3);border-radius:.5rem;padding:.4rem .8rem;font-size:.78rem;font-weight:600;color:#01696f;cursor:pointer;margin-bottom:.6rem;transition:background .15s}.qtog:hover{background:rgba(1,105,111,.07)}.qprog{display:none;font-size:.76rem;color:#3d3a35;background:rgba(1,105,111,.04);border:1px solid rgba(1,105,111,.15);border-radius:.5rem;padding:.8rem;margin-bottom:.6rem}.qprog.on{display:block}.qtags{display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.5rem}.qtag{background:rgba(1,105,111,.08);color:#01696f;font-size:.68rem;font-weight:600;padding:.2rem .55rem;border-radius:999px}.qstaff{display:flex;flex-wrap:wrap;gap:.5rem;padding:.7rem 0;border-top:1px solid rgba(0,0,0,.08);margin-top:auto}.qsm{display:flex;align-items:center;gap:.35rem}.qav{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid rgba(1,105,111,.25)}.qsn{font-size:.68rem;font-weight:700;color:#1a1916;display:block;line-height:1.2}.qsr{font-size:.6rem;color:#7a7974;display:block}.qwa{border-top:1px solid rgba(0,0,0,.08);padding-top:.7rem;margin-top:.5rem}.qwl{font-size:.7rem;color:#7a7974;display:block;margin-bottom:.35rem;font-weight:500}.qwb{display:flex;align-items:center;justify-content:center;gap:.4rem;background:#25d366;color:#fff;border-radius:999px;padding:.55rem 1rem;font-size:.76rem;font-weight:700;text-decoration:none;transition:background .18s}.qwb:hover{background:#1ebe5d}';
document.head.appendChild(s);

var WA='<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

var ST={
 s:{i:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/IGIxErTLntRsDXru.jpeg',n:'Stefano Balducci',r:'Spiritual Guide & Coach'},
 p:{i:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/WLrEFZfmGncoYZzr.jpeg',n:'Paolo Bardi',r:'Registri Akashici'},
 m:{i:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/zKVEkBDPGHkktEvd.jpeg',n:'Miretta Frediani',r:'Pranoterapia · Reiki'},
 f:{i:'https://guarigionequantica.eu/federica.jpg',n:'Federica Continanza',r:'Danze sciamaniche'}
};

var EV=[
 {city:'Firenze Quantica',title:'Io sono il mio maestro',img:'https://guarigionequantica.eu/Scala.jpg',fbk:'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/piacenza-piazza-cavalli_36bebc55.jpg',bdg:'🌸 Dom 12 Aprile 2026',loc:'Circolo La Loggetta, Via Aretina 301, Firenze',sch:'Dom 10:00–18:00',desc:'Giornata di guarigione quantica di gruppo nel cuore di Firenze. Trasforma le tue emozioni, riequilibra i chakra e riconnettiti con la tua essenza.',tags:['Guarigione Quantica','Trasmutazione emozionale','Meditazioni guidate','Pasto condiviso'],prog:'<b>10:00</b> Apertura e presentazione<br><b>11:00</b> Guarigione Quantica sessione 1<br><b>13:00</b> 🍽️ Pranzo in condivisione<br><b>14:30</b> Guarigione Quantica sessione 2<br><b>17:30</b> Condivisioni e chiusura',st:['s','p','m'],wa:'Ciao%20Stefano%2C%20vorrei%20informazioni%20sull%27evento%20Firenze%20Quantica%2012%20aprile'},
 {city:'Lucca Quantica',title:"Il Risveglio dell'Essenza",img:'https://guarigionequantica.eu/Scala.jpg',fbk:'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/vicenza-hero_8d176b67.jpg',bdg:'🏛️ Dom 19 Aprile 2026',loc:'Via Ludovica 1658, Sesto di Moriano, Lucca',sch:'Dom 10:00–18:00',desc:"Tra Guarigione Quantica e Danza dell'Anima. Percorso di trasformazione attraverso i 7 veli per riscoprire la propria natura autentica.",tags:['Guarigione Quantica','Danza dei 7 Veli','Riequilibrio Chakra','Pasto condiviso'],prog:"<b>10:00</b> Apertura del cerchio<br><b>10:30</b> Guarigione Quantica — Mente Corpo Spirito<br><b>13:00</b> 🍽️ Pranzo in condivisione<br><b>14:30</b> Danza dei Sette Veli<br><b>17:30</b> Condivisioni e chiusura",st:['s','p','m','f'],wa:'Ciao%20Stefano%2C%20vorrei%20informazioni%20sull%27evento%20Lucca%20Quantica%2019%20aprile'},
 {city:'Piacenza Quantica',title:'Io sono il mio maestro',img:'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/piacenza-piazza-cavalli_36bebc55.jpg',bdg:'⚡ Sab 30 Maggio 2026',loc:'Il Soffio Vitale, Piacenza',sch:'Sab 10:00–18:00',desc:'Giornata di guarigione quantica di gruppo a Piacenza. Tecniche energetiche e meditazioni guidate per ritrovare equilibrio interiore.',tags:['Guarigione Quantica','Trasmutazione emozionale','Meditazioni guidate','Pasto condiviso'],prog:'<b>10:00</b> Apertura e presentazione<br><b>11:00</b> Guarigione Quantica sessione 1<br><b>13:00</b> 🍽️ Pranzo in condivisione<br><b>14:30</b> Guarigione Quantica sessione 2<br><b>17:30</b> Condivisioni e chiusura',st:['s','p','m'],wa:'Ciao%20Stefano%2C%20vorrei%20informazioni%20Piacenza%20Quantica%2030%20maggio'},
 {city:'Vicenza',title:'Guarigione Quantica di Gruppo',img:'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/vicenza-hero_8d176b67.jpg',bdg:'🌿 Dom 31 Maggio 2026',loc:'Strada di Saviabona 328, Vicenza',sch:'Dom 10:00–18:00',desc:'Giornata di guarigione quantica di gruppo a Vicenza con pranzo condiviso in atmosfera raccolta e trasformativa.',tags:['Guarigione Quantica','Trasmutazione emozionale','Meditazioni guidate','Pranzo condiviso'],prog:'<b>10:00</b> Apertura e presentazione<br><b>11:00</b> Guarigione Quantica sessione 1<br><b>13:00</b> 🍽️ Pranzo condiviso<br><b>14:30</b> Guarigione Quantica sessione 2<br><b>17:30</b> Condivisioni e chiusura',st:['s','p','m'],wa:'Ciao%20Stefano%2C%20vorrei%20informazioni%20evento%20Vicenza%2031%20maggio'}
];

function sm(k){var p=ST[k];return'<div class="qsm"><img class="qav" src="'+p.i+'" alt="'+p.n+'" loading="lazy"><div><span class="qsn">'+p.n+'</span><span class="qsr">'+p.r+'</span></div></div>';}

function card(e){
 var d=document.createElement('div');
 d.className='event-card qc';
 d.style.cssText='opacity:1;visibility:visible;transform:none;display:flex;flex-direction:column';
 d.innerHTML='<div class="qcov"><img src="'+e.img+'"'+(e.fbk?' onerror="this.src=\''+e.fbk+'\'"':'')+' alt="'+e.city+'" loading="lazy"><span class="qbdg">'+e.bdg+'</span></div>'
 +'<div class="qbody"><div class="qcity">'+e.city+'</div><h3 class="qtitle">'+e.title+'</h3>'
 +'<div class="qloc">📍 '+e.loc+' <a href="https://maps.google.com/?q='+encodeURIComponent(e.loc)+'" target="_blank" rel="noopener">Mappa</a></div>'
 +'<div class="qsch">🕐 '+e.sch+'</div>'
 +'<p class="qdesc">'+e.desc+'</p>'
 +'<button class="qtog" onclick="var p=this.nextElementSibling;p.classList.toggle(\'on\');this.textContent=p.classList.contains(\'on\')?\'▲ Chiudi programma\':\'▼ Programma\'">▼ Programma</button>'
 +'<div class="qprog"><div class="qtags">'+e.tags.map(function(t){return'<span class="qtag">'+t+'</span>';}).join('')+'</div><p style="margin:.4rem 0 0;font-size:.76rem;line-height:1.9">'+e.prog+'</p></div>'
 +'<div class="qstaff">'+e.st.map(sm).join('')+'</div>'
 +'<div class="qwa"><span class="qwl">📞 Informazioni e iscrizioni</span><a class="qwb" href="https://wa.me/393423033404?text='+e.wa+'" target="_blank" rel="noopener">'+WA+' Stefano Balducci · 342 303 3404</a></div>'
 +'</div>';
 return d;
}

function run(){
 /* Trova la grid degli eventi del gruppo */
 var grid=document.querySelector('.eventi__grid');
 if(!grid){console.warn('patch: eventi__grid non trovata');return;}

 /* Trova le card quantica da rimuovere (Firenze/Lucca/Piacenza) */
 var old=[];
 grid.querySelectorAll('.event-card').forEach(function(c){
  var city=c.querySelector('.event-card__city');
  var h3=c.querySelector('h3');
  var txt=(city?city.textContent:'')+(h3?h3.textContent:'');
  if(txt.indexOf('Firenze')>-1||txt.indexOf('Lucca')>-1||txt.indexOf('Piacenza')>-1||txt.indexOf('Quantica')>-1){
   old.push(c);
  }
 });

 /* Trova il punto di inserimento: dopo la prima card (Comeana) */
 var firstCard=grid.querySelector('.event-card');
 var insertAfter=firstCard?firstCard.nextSibling:null;

 /* Inserisci le 4 card */
 EV.forEach(function(e){
  var c=card(e);
  if(insertAfter){
   grid.insertBefore(c,insertAfter);
  } else {
   grid.appendChild(c);
  }
 });

 /* Rimuovi le vecchie card quantica */
 old.forEach(function(c){c.remove();});

 console.log('patch OK: inserite '+EV.length+' card, rimosse '+old.length+' vecchie');
}

document.readyState==='loading'?document.addEventListener('DOMContentLoaded',run):run();
})();
