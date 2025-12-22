/* ================================
   SCROLL FLOATING NAVBAR (FINAL)
================================ */
document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelector('.nav-links');

  if (navLinks) {
    const SCROLL_THRESHOLD = 120;
    window.addEventListener('scroll', () => {
      navLinks.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
    });
  }

  /* ================================
     DROPDOWN DESKTOP
  ================================ */
  document.querySelectorAll('.dropdown-parent').forEach(parent => {
    const toggle = parent.querySelector('.dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', e => {
      if (window.innerWidth > 900) {
        e.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });

  document.addEventListener('click', e => {
    document.querySelectorAll('.dropdown-parent.open').forEach(open => {
      if (!open.contains(e.target)) {
        open.classList.remove('open');
      }
    });
  });

  /* ================================
     HERO IMAGE AUTO SLIDER
  ================================ */
  const slides = document.querySelectorAll('.hero-frame .slide');
  let current = 0;

  if (slides.length) {
    slides[0].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  /* ================================
     SMOOTH SCROLL
  ================================ */
  document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ================================
     MOBILE FULLSCREEN MENU (FIXED)
  ================================ */
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-close');
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  mobileDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });
  });

  /* ================================
     HELP WIDGET POPUP (FIXED)
  ================================ */
  const helpToggle = document.getElementById('helpToggle');
  const helpMenu = document.getElementById('helpMenu');

  if (helpToggle && helpMenu) {
    helpToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      helpMenu.classList.toggle('active');
    });

    // Klik di luar → tutup
    document.addEventListener('click', (e) => {
      if (!helpMenu.contains(e.target) && !helpToggle.contains(e.target)) {
        helpMenu.classList.remove('active');
      }
    });
  }

});
