/* ============================================
   PERCORSO DI CRESCITA — App JavaScript
   ============================================ */

/* ------------------------------------------
   EVENT SELECT TOGGLE (global — outside IIFE)
   Shows/hides event dropdown when "Iscrizione evento" is selected
   ------------------------------------------ */
function toggleEventoSelect(select) {
  var group = document.getElementById('evento-group');
  if (!group) return;
  var eventoSelect = document.getElementById('evento');
  if (select.value === 'Iscrizione evento') {
    group.style.display = '';
    if (eventoSelect) eventoSelect.required = true;
  } else {
    group.style.display = 'none';
    if (eventoSelect) {
      eventoSelect.required = false;
      eventoSelect.value = '';
    }
  }
}

/* ------------------------------------------
   PROGRAM TOGGLE (global — outside IIFE)
   ------------------------------------------ */
function toggleProgram(btn) {
  // Find the program panel — it may not be the immediate next sibling (brochure link can be in between)
  var panel = btn.parentElement.querySelector('.event-card__program');
  if (!panel) return;
  var isOpen = panel.classList.contains('is-open');

  if (isOpen) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    requestAnimationFrame(function() {
      panel.style.maxHeight = '0';
    });
    panel.classList.remove('is-open');
    btn.classList.remove('is-open');
  } else {
    panel.classList.add('is-open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
    btn.classList.add('is-open');
    // Remove fixed max-height after animation so inner content can expand
    panel.addEventListener('transitionend', function handler() {
      if (panel.classList.contains('is-open')) {
        panel.style.maxHeight = 'none';
      }
      panel.removeEventListener('transitionend', handler);
    });
  }
}

(function() {
  'use strict';

  /* ------------------------------------------
     COUNTDOWN TIMER
     ------------------------------------------ */
  const events = [
    { name: 'Percorso di Crescita e Consapevolezza', date: '2026-03-29T10:00:00+01:00' },
    { name: 'Firenze Quantica', date: '2026-04-12T10:00:00+02:00' },
    { name: 'Lucca Quantica', date: '2026-04-19T10:00:00+02:00' },
    { name: 'Connessione con le Guide Spirituali', date: '2026-05-17T10:00:00+02:00' },
    { name: 'Percorso di Crescita – 2° Modulo', date: '2026-05-23T14:00:00+02:00' },
    { name: 'Impastando e Meditando', date: '2026-09-01T14:00:00+02:00' }
  ];

  function getNextEvent() {
    const now = new Date();
    for (const event of events) {
      const eventDate = new Date(event.date);
      if (eventDate > now) {
        return { name: event.name, date: eventDate };
      }
    }
    // If all events passed, show last one
    const last = events[events.length - 1];
    return { name: last.name, date: new Date(last.date) };
  }

  function updateCountdown() {
    const nextEvent = getNextEvent();
    const now = new Date();
    const diff = nextEvent.date - now;

    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    const eventNameEl = document.getElementById('countdown-event-name');

    if (!daysEl) return;

    if (diff <= 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minutesEl.textContent = '0';
      secondsEl.textContent = '0';
      if (eventNameEl) eventNameEl.textContent = nextEvent.name;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    if (eventNameEl) eventNameEl.textContent = nextEvent.name;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ------------------------------------------
     SCROLL ANIMATIONS (IntersectionObserver)
     ------------------------------------------ */
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    fadeElements.forEach(function(el) {
      el.classList.add('is-visible');
    });
  }

  /* ------------------------------------------
     HEADER SCROLL BEHAVIOR
     ------------------------------------------ */
  const header = document.getElementById('header');
  let lastScrollY = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ------------------------------------------
     MOBILE MENU
     ------------------------------------------ */
  window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const isOpen = menu.classList.contains('is-open');
    menu.classList.toggle('is-open');
    menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  /* ------------------------------------------
     LIGHTBOX GALLERY
     ------------------------------------------ */
  const galleryImages = [
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/nqriVINIHuKrVGtT.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/krHONcNPggMsPqyY.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/UBqmdgsTrxPnNTlM.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/riWYtPVIqaUfgjLm.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/ZFJJRWCDRkPBmktA.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/shOnVEwIJUSZPWrc.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/fayTmBVitWeSNzUw.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/OoVyvdWGtgEYyLJh.jpg',
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/CqZUyZrRRmmzLUJm.jpg',
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/galleria-pranoterapia_951a5aab.jpg',
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/galleria-gruppo-pratica_5a29b4a1.jpg',
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663319415429/VRhBspmQfq6mdBX5qEfA9v/galleria-gruppo-grande_eed11d7b.jpg'
  ];

  let currentLightboxIndex = 0;

  window.openLightbox = function(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lightbox || !img) return;

    img.src = galleryImages[index];
    img.alt = 'Foto galleria ' + (index + 1);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function(e) {
    if (e && e.target !== e.currentTarget && !e.target.closest('.lightbox__close')) return;
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  window.navigateLightbox = function(direction, e) {
    if (e) { e.stopPropagation(); }
    currentLightboxIndex = (currentLightboxIndex + direction + galleryImages.length) % galleryImages.length;
    const img = document.getElementById('lightbox-img');
    if (img) {
      img.src = galleryImages[currentLightboxIndex];
      img.alt = 'Foto galleria ' + (currentLightboxIndex + 1);
    }
  };

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox({ target: lightbox, currentTarget: lightbox });
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  /* ------------------------------------------
     AUDIO PLAYER
     ------------------------------------------ */
  let currentAudio = null;
  let currentAudioCard = null;

  window.toggleAudio = function(btn) {
    var card = btn.closest('.audio-card');
    if (!card) return;

    var src = card.getAttribute('data-src');
    var playIcon = btn.querySelector('.play-icon');
    var pauseIcon = btn.querySelector('.pause-icon');

    // If clicking a different card
    if (currentAudioCard && currentAudioCard !== card) {
      stopCurrentAudio();
    }

    if (!card._audio) {
      card._audio = new Audio(src);
      card._audio.addEventListener('timeupdate', function() {
        updateAudioProgress(card);
      });
      card._audio.addEventListener('ended', function() {
        resetAudioCard(card);
        currentAudio = null;
        currentAudioCard = null;
      });
      card._audio.addEventListener('loadedmetadata', function() {
        updateAudioTime(card);
      });
    }

    if (card._audio.paused) {
      card._audio.play().catch(function() {});
      card.classList.add('is-playing');
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      currentAudio = card._audio;
      currentAudioCard = card;
    } else {
      card._audio.pause();
      card.classList.remove('is-playing');
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
    }
  };

  function stopCurrentAudio() {
    if (currentAudioCard && currentAudioCard._audio) {
      currentAudioCard._audio.pause();
      resetAudioCard(currentAudioCard);
    }
    currentAudio = null;
    currentAudioCard = null;
  }

  function resetAudioCard(card) {
    card.classList.remove('is-playing');
    var playIcon = card.querySelector('.play-icon');
    var pauseIcon = card.querySelector('.pause-icon');
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
  }

  function updateAudioProgress(card) {
    var audio = card._audio;
    if (!audio || !audio.duration) return;
    var progress = (audio.currentTime / audio.duration) * 100;
    var bar = card.querySelector('.audio-card__progress-bar');
    if (bar) bar.style.width = progress + '%';
    updateAudioTime(card);
  }

  function updateAudioTime(card) {
    var audio = card._audio;
    if (!audio) return;
    var timeEl = card.querySelector('.audio-card__time');
    if (!timeEl) return;

    var current = formatTime(audio.currentTime);
    var total = formatTime(audio.duration || 0);
    timeEl.textContent = current + ' / ' + total;
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + String(secs).padStart(2, '0');
  }

  window.seekAudio = function(progressEl, e) {
    var card = progressEl.closest('.audio-card');
    if (!card || !card._audio) return;

    var rect = progressEl.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var percent = x / rect.width;
    card._audio.currentTime = percent * card._audio.duration;
  };

  /* ------------------------------------------
     FAQ ACCORDION
     ------------------------------------------ */
  window.toggleFaq = function(btn) {
    var item = btn.closest('.faq-item');
    if (!item) return;

    var answer = item.querySelector('.faq-item__answer');
    var isOpen = item.classList.contains('is-open');

    // Close all other items
    document.querySelectorAll('.faq-item.is-open').forEach(function(other) {
      if (other !== item) {
        other.classList.remove('is-open');
        var otherAnswer = other.querySelector('.faq-item__answer');
        if (otherAnswer) otherAnswer.style.maxHeight = '0';
      }
    });

    if (isOpen) {
      item.classList.remove('is-open');
      if (answer) answer.style.maxHeight = '0';
    } else {
      item.classList.add('is-open');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  };

  /* ------------------------------------------
     SMOOTH SCROLL FOR NAV LINKS
     ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
