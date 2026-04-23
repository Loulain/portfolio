(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';
  var DARK_CLASS = 'dark';
  var JS_CLASS = 'js';
  var VISIBLE_CLASS = 'is-visible';
  var OPEN_CLASS = 'open';
  var ACTIVE_CLASS = 'is-active';

  var root = document.documentElement;
  root.classList.add(JS_CLASS);

  // ===== Theme Toggle =====
  var toggleButtons = document.querySelectorAll('[data-theme-toggle]');

  function syncPressed(isDark) {
    toggleButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  function applyTheme(theme) {
    var isDark = theme === DARK;
    root.classList.toggle(DARK_CLASS, isDark);
    syncPressed(isDark);
  }

  syncPressed(root.classList.contains(DARK_CLASS));

  function toggleTheme() {
    var next = root.classList.contains(DARK_CLASS) ? LIGHT : DARK;
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
  }

  toggleButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY && e.newValue) applyTheme(e.newValue);
  });

  var media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', function (e) {
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (err) {}
    if (!stored) applyTheme(e.matches ? DARK : LIGHT);
  });

  // ===== Scroll Reveal =====
  var revealTargets = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (el) {
        el.classList.add(VISIBLE_CLASS);
        el.style.willChange = '';
      });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.classList.add(VISIBLE_CLASS);
          observer.unobserve(el);
          setTimeout(function () { el.style.willChange = ''; }, 800);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      revealTargets.forEach(function (el) { observer.observe(el); });
    }
  }

  // ===== Mobile Menu =====
  var hamburger = document.querySelector('.navbar__hamburger');
  var navLinks = document.querySelector('.navbar__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle(OPEN_CLASS);
    });
  }

  // ===== TOC Scroll Spy =====
  var tocHeadings = document.querySelectorAll('.project-content h2[id]');
  if (tocHeadings.length && 'IntersectionObserver' in window) {
    var linksById = new Map();
    document.querySelectorAll('.toc__list a[href^="#"]').forEach(function (a) {
      linksById.set(a.getAttribute('href').slice(1), a);
    });

    if (linksById.size) {
      var currentActive = null;
      var setActive = function (id) {
        if (currentActive === id) return;
        var prev = linksById.get(currentActive);
        if (prev) prev.classList.remove(ACTIVE_CLASS);
        var next = linksById.get(id);
        if (next) next.classList.add(ACTIVE_CLASS);
        currentActive = id;
      };

      setActive(tocHeadings[0].id);

      var tocObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setActive(entry.target.id);
          }
        });
      }, { rootMargin: '-88px 0px -55% 0px' });

      tocHeadings.forEach(function (h) { tocObserver.observe(h); });
    }
  }
})();
