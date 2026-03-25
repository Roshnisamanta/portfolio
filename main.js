/* ═══════════════════════════════════════════════════
   ROSHNI SAMANTA — PORTFOLIO  |  main.js
   ═══════════════════════════════════════════════════ */

/* ─── VANTA.JS NET BACKGROUND ────────────────────── */
function initVanta() {
  if (typeof VANTA === 'undefined' || typeof THREE === 'undefined') {
    console.warn('Vanta or Three.js not loaded yet, retrying...');
    setTimeout(initVanta, 200);
    return;
  }

  VANTA.NET({
    el: '#vanta-bg',
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00d4ff,          /* cyan nodes & lines */
    backgroundColor: 0x050810, /* matches --ink */
    points: 14.00,
    maxDistance: 22.00,
    spacing: 18.00,
    showDots: true
  });
}

/* ─── SCROLL REVEAL ──────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Trigger hero reveals immediately */
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
  }, 150);
}

/* ─── MOBILE MENU ────────────────────────────────── */
function openMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── RESUME MODAL ───────────────────────────────── */
function openResume() {
  document.getElementById('resumeModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeResume() {
  document.getElementById('resumeModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── CONTACT FORM ───────────────────────────────── */
function sendMessage() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }
  window.location.href =
    `mailto:roshni.samanta.1985@gmail.com` +
    `?subject=${encodeURIComponent('Portfolio Enquiry from ' + name)}` +
    `&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')')}`;
}

/* ─── GLOBAL EVENT LISTENERS ─────────────────────── */
function initListeners() {
  /* Close resume modal on backdrop click */
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeResume();
    });
  }

  /* ESC key closes both modal and mobile menu */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeResume();
      closeMenu();
    }
  });

  /* Smooth active nav link highlight on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--cyan)'
        : '';
    });
  }, { passive: true });
}

/* ─── INIT ON DOM READY ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initVanta();
  initScrollReveal();
  initListeners();
});