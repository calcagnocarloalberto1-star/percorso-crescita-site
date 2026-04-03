(function() {
  // ── CSS ──
  var style = document.createElement('style');
  style.textContent = `
    .event-card--quantica { border-radius:1rem!important; overflow:hidden; box-shadow:0 4px 20px rgba(1,105,111,.15)!important; border:1.5px solid rgba(1,105,111,.25)!important; }
    .ev-cover { position:relative; height:180px; overflow:hidden; background:#f3f0ec; }
    .ev-cover img { width:100%; height:100%; object-fit:cover; display:block; }
    .ev-cover-badge { position:absolute; top:.75rem; left:.75rem; background:rgba(1,105,111,.85); color:#fff; font-size:.7rem; font-weight:600; text-transform:uppercase; letter-spacing:.08em; padding:.25rem .65rem; border-radius:999px; }
    .ev-city { font-size:.7rem; text-transform:uppercase; letter-spacing:.12em; color:#01696f; font-weight:700; margin:.75rem 0 .25rem; }
    .ev-staff { display:flex; flex-wrap:wrap; gap:.6rem; padding:.75rem 0; border-top:1px solid rgba(0,0,0,.08); margin-top:.5rem; }
    .ev-staff-member { display:flex; align-items:center; gap:.4rem; }
    .ev-staff-avatar { width:30px; height:30px; border-radius:50%; object-fit:cover; border:1.5px solid rgba(1,105,111,.3); }
    .ev-staff-name { font-size:.7rem; font-weight:600; color:#28251d; display:block; line-height:1.2; }
    .ev-staff-role { font-size:.6rem; color:#7a7974; display:block; }
    .ev-wa-section { border-top:1px solid rgba(0,0,0,.08); padding-top:.75rem; margin-top:.5rem; }
    .ev-wa-label { font-size:.7rem; color:#7a7974; font-weight:500; display:block; margin-bottom:.4rem; }
    .ev-wa-btn { display:flex; align-items:center; justify-content:center; gap:.4rem; background:#25d366; color:#fff; border-radius:999px; padding:.55rem 1rem; font-size:.75rem; font-weight:600; text-decoration:none; }
    .ev-wa-btn:hover { background:#1ebe5d; }
  `;
  document.head.appendChild(style);

  // ── Staff HTML helper ──
  function staffMember(src, name, role) {
    return '<div class="ev-staff-member"><img class="ev-staff-avatar" src="' + src + '" alt="' + name + '"/><div><span class="ev-staff-name">' + name + '</span><span class="ev-staff-role">' + role + '</span></div></div>';
  }

  var S = {
    stefano: staffMember('https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/IGIxErTLntRsDXru.jpeg', 'Stefano Balducci', 'Spiritual Guide & Coach'),
    paolo:   staffMember('https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/WLrEFZfmGncoYZzr.jpeg', 'Paolo Bardi', 'Registri Akashici'),
    miretta: staffMember('https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/zKVEkBDPGHkktEvd.jpeg', 'Miretta Frediani', 'Pranoterapia · Reiki'),
    federica:staffMember('https://guarigionequantica.eu/federica.jpg', 'Federica Continanza', 'Danze sciamaniche')
  };

  function waSection(msg) {
    return '<div class="ev-wa-section"><span class="ev-wa-label">📞 Informazioni e iscrizioni</span><a class="ev-wa-btn" href="https://wa.me/393423033404?text=' + msg + '" target="_blank" rel="noopener">💬 Stefano Balducci · 342 303 3404</a></div>';
  }

  // ── Events config ──
  var events = [
    {
      title: 'Firenze Quantica',
      imgSrc: 'https://guarigionequantica.eu/P1080776.JPG',
      imgFallback: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/piacenza-piazza-cavalli_36bebc55.jpg',
      badge: 'Evento in evidenza',
      staff: S.stefano + S.paolo + S.miretta,
      wa: 'Ciao%20Stefano%2C%20vorrei%20informazioni%20sull%27evento%20di%20Firenze%20del%2012%20aprile'
    },
    {
      title: 'Lucca Quantica',
      imgSrc: 'https://guarigionequantica.eu/Scala.jpg',
      imgFallback: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/vicenza-hero_8d176b67.jpg',
      badge: null,
      staff: S.stefano + S.paolo + S.miretta + S.federica,
      wa: 'Ciao%20Stefano%2C%20vorrei%20informazioni%20sull%27evento%20di%20Lucca%20del%2019%20aprile'
    },
    {
      title: 'Piacenza Quantica',
      imgSrc: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/piacenza-piazza-cavalli_36bebc55.jpg',
      imgFallback: null,
      badge: null,
      staff: S.stefano + S.paolo + S.miretta,
      wa: 'Ciao%20Stefano%2C%20vorrei%20informazioni%20sull%27evento%20di%20Piacenza%20del%2030%20maggio'
    }
  ];

  function patchCard(card, cfg) {
    if (!card) return;
    card.classList.add('event-card--quantica');
    var body = card.querySelector('.event-card__body');
    if (!body) return;

    // Add cover photo at top of card (before body)
    var img = new Image();
    img.className = '';
    img.alt = cfg.title;
    img.loading = 'lazy';
    img.src = cfg.imgSrc;
    if (cfg.imgFallback) img.onerror = function(){ this.src = cfg.imgFallback; };
    var cover = document.createElement('div');
    cover.className = 'ev-cover';
    cover.appendChild(img);
    if (cfg.badge) {
      var badge = document.createElement('span');
      badge.className = 'ev-cover-badge';
      badge.textContent = cfg.badge;
      cover.appendChild(badge);
    }
    card.insertBefore(cover, body);

    // Add city label
    var cityEl = document.createElement('div');
    cityEl.className = 'ev-city';
    cityEl.textContent = cfg.title;
    body.insertBefore(cityEl, body.firstChild);

    // Add staff + wa after program-contact
    var contact = body.querySelector('.program-contact');
    if (contact) {
      var staffDiv = document.createElement('div');
      staffDiv.className = 'ev-staff';
      staffDiv.innerHTML = cfg.staff;
      var waDiv = document.createElement('div');
      waDiv.innerHTML = waSection(cfg.wa);
      var programDiv = contact.closest('.event-card__program') || contact.closest('.event-card__body');
      body.appendChild(staffDiv);
      body.appendChild(waDiv.firstChild);
    }
  }

  // ── Find and patch the 3 quantica cards ──
  function init() {
    var allCards = document.querySelectorAll('.event-card');
    allCards.forEach(function(card) {
      var title = card.querySelector('.event-card__title');
      if (!title) return;
      var txt = title.textContent.trim();
      events.forEach(function(cfg) {
        if (txt === cfg.title) patchCard(card, cfg);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
