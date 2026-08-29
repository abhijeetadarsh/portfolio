/* Abhijeet Adarsh — portfolio behaviour.
   Three small jobs: reveal-on-scroll, active nav state, footer year.
   No dependencies. Content is never hidden without JS: the `.js-reveal` class
   that dims `.reveal` elements is added by an inline script in <head> only when
   IntersectionObserver exists and reduced motion is not requested. */
(function () {
  'use strict';

  /* ---------- 1. scroll reveal, staggered per section ---------- */
  function enableReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!items.length) return;

    // The inline head script decides whether reveal runs at all. If it opted
    // out, elements are already visible and there is nothing to observe.
    if (!document.documentElement.classList.contains('js-reveal')) return;

    var observer = new IntersectionObserver(function (entries) {
      // Stagger only within a single batch so a long page never queues a
      // visible delay chain (30-50ms per item, capped).
      var shown = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty('--reveal-delay', Math.min(shown, 6) * 45 + 'ms');
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
        shown++;
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 2. active section in the nav ---------- */
  function enableNavState() {
    var nav = document.getElementById('nav');
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    if (!links.length) return;

    var sections = links
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    function setCurrent(link) {
      links.forEach(function (l) {
        if (l === link) l.setAttribute('aria-current', 'true');
        else l.removeAttribute('aria-current');
      });
    }

    function update() {
      // Border on the nav once the page has moved at all.
      if (nav) nav.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false');

      var line = window.scrollY + window.innerHeight * 0.3;
      var current = null;
      sections.forEach(function (s) {
        if (s.el.offsetTop <= line) current = s.link;
      });

      // At the very bottom the last section wins even if it is short.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sections[sections.length - 1].link;
      }
      setCurrent(current);
    }

    // rAF-throttled: scroll fires far more often than we need to paint.
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });

    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* ---------- 3. mobile disclosure menu ---------- */
  function enableMenu() {
    var toggle = document.getElementById('nav-toggle');
    var panel  = document.getElementById('nav-links');
    if (!toggle || !panel) return;

    var desktop = window.matchMedia('(min-width: 860px)');

    // CSS owns visibility (see styles.css); this only reflects state.
    function open(isOpen) {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
      open(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Choosing a destination closes the menu.
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a') && !desktop.matches) open(false);
    });

    // Escape closes and returns focus to the control that opened it.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || toggle.getAttribute('aria-expanded') !== 'true') return;
      open(false);
      toggle.focus();
    });

    // A click outside dismisses it.
    document.addEventListener('click', function (e) {
      if (desktop.matches || toggle.getAttribute('aria-expanded') !== 'true') return;
      if (!e.target.closest('.nav__inner')) open(false);
    });

    // Crossing into desktop layout collapses the state the toggle was holding.
    function reset() { if (desktop.matches) open(false); }
    if (desktop.addEventListener) desktop.addEventListener('change', reset);
    else if (desktop.addListener) desktop.addListener(reset);
  }

  /* ---------- 4. footer year ---------- */
  function setYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function init() { enableReveal(); enableNavState(); enableMenu(); setYear(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
