/**
 * Menú Responsive — Script principal
 * Controla la apertura/cierre del menú en dispositivos móviles
 */

(function () {
  'use strict';

  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu   = document.getElementById('navMenu');
  const overlay   = document.getElementById('overlay');

  // Guarda referencias a todos los links del menú
  const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];

  // ─── Abrir / Cerrar ───────────────────────────────────────────
  function openMenu() {
    navMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    burgerBtn.classList.add('is-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Cerrar menú');

    // Bloquea el scroll del body mientras el menú está abierto
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    burgerBtn.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Abrir menú');

    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  }

  // ─── Event listeners ─────────────────────────────────────────
  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }

  // Cerrar al hacer clic en el overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Cerrar al hacer clic en cualquier enlace del menú
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Cerrar con la tecla Escape (accesibilidad)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      burgerBtn.focus(); // Devuelve el foco al botón
    }
  });

  // Restaurar el estado al cambiar a desktop (evita que el body quede bloqueado)
  const mq = window.matchMedia('(min-width: 768px)');

  function handleBreakpoint(e) {
    if (e.matches) {
      // Volvemos a desktop: asegurar que todo está limpio
      closeMenu();
    }
  }

  mq.addEventListener('change', handleBreakpoint);

})();