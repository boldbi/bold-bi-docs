(function () {
  'use strict';

  var CX = '182ea3577790a69c1', NAME = 'results';

  (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready)();

  function ready() {
    var $ = {
      input: q('#doc-search-input'),
      btn: q('.doc-search .search-icon'),
      hero: q('.doc-hero'),
      grid: q('.grid-container'),
      wrap: q('.search_result_container'),
      back: null
    };
    $.back = $.wrap ? $.wrap.querySelector('.backToCard') : null;

    cssHide(); gcseCallbacks($); loadCSE(CX); wire($);
    window.docsSearch = { run: function (v) { run((v || '').trim(), $); } };

    // Hamburger menu toggle - starts here
    const btn = document.querySelector('.br-menu');
    const panel = document.querySelector('.mobile-menu-panel');
    if (!btn || !panel) return;

    const body = document.body;
    const mqDesktop = matchMedia('(min-width:901px)');
    const mqTiny = matchMedia('(max-width:400px)');

    const isBtnVisible = () => {
      const s = getComputedStyle(btn);
      return s.display !== 'none' && s.visibility !== 'hidden' && btn.offsetWidth && btn.offsetHeight;
    };

    const close = () => {
      panel.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    };

    const closeIfHidden = () => { if (!isBtnVisible()) close(); };

    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('show');
      btn.setAttribute('aria-expanded', String(open));
    });

    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    mqDesktop.addEventListener('change', closeIfHidden);
    mqTiny.addEventListener('change', closeIfHidden);
    addEventListener('resize', () => setTimeout(closeIfHidden, 120));
    closeIfHidden();
    // Hamburger menu toggle - ends here
  }

  function wire($) {
    $.btn && $.btn.addEventListener('click', function (e) { e.preventDefault(); run(val($.input), $); });
    $.input && $.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); run(val($.input), $); } });
    $.back && $.back.addEventListener('click', function () {
      if ($.input) $.input.value = '';
      var g = q('#gsc-i-id1, input.gsc-input'); if (g) g.value = '';
      showDocs($); window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function showResults($) { $.grid && $.grid.classList.add('hide'); $.wrap && $.wrap.classList.remove('hide'); }
  function showDocs($) { $.wrap && $.wrap.classList.add('hide'); $.grid && $.grid.classList.remove('hide'); $.hero && $.hero.classList.remove('hide'); }

  function gcseCallbacks($) {
    window.__gcse = window.__gcse || {};
    window.__gcse.initializationCallback = function () {
      var g = q('#gsc-i-id1, input.gsc-input'); if (g && !g.placeholder) g.setAttribute('placeholder', 'Search');
    };
    window.__gcse.searchCallbacks = {
      web: {
        starting: function () { },
        ready: function () {
          showResults($);
          var r = document.getElementById('gcse-results') || q('.gcse-searchresults');
          if (r) { r.setAttribute('tabindex', '-1'); setTimeout(function () { try { r.focus(); } catch (_) { } }, 0); }
        },
        rendered: function () { }
      }
    };
  }

  function loadCSE(cx) {
    if (q('script[data-gcse-loaded]')) return;
    var s = document.createElement('script');
    s.async = true; s.src = 'https://cse.google.com/cse.js?cx=' + encodeURIComponent(cx);
    s.setAttribute('data-gcse-loaded', 'true'); document.head.appendChild(s);
  }

  function exec(query) {
    try {
      var api = window.google && window.google.search && window.google.search.cse && window.google.search.cse.element;
      if (!api || typeof api.getElement !== 'function') return false;
      var el = (NAME && api.getElement(NAME)) || api.getElement() || api.getElement('gcse-results');
      if (el && typeof el.execute === 'function') { el.execute(query); return true; }
    } catch (_) { }
    return false;
  }

  function fallback(query) {
    var g = q('#gsc-i-id1, input.gsc-input'); if (!g) return false;
    g.value = query; g.dispatchEvent(new Event('input', { bubbles: true }));
    g.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter', code: 'Enter', which: 13, keyCode: 13 }));
    return true;
  }

  function retry(query, n, d) {
    var t = 0; (function go() { if (exec(query) || fallback(query)) return; if (++t >= n) return; setTimeout(go, d * Math.min(t + 1, 5)); })();
  }

  function run(query, $) {
    if (!query) return; showResults($);
    if (!exec(query) && !fallback(query)) retry(query, 4, 150);
  }

  function cssHide() {
    if (q('style[data-docs-hide]')) return;
    var s = document.createElement('style'); s.setAttribute('data-docs-hide', ''); s.textContent = '.hide{display:none!important;}';
    document.head.appendChild(s);
  }

  function val(i) { return (i && i.value || '').trim(); }
  function q(sel) { return document.querySelector(sel); }
})();