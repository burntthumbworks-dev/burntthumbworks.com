/**
 * Burnt Thumb Works — Adaptive Codex Loader
 * js/codex-loader.js
 * 
 * Default: html.codex-rich (loads css/voynich-rich.css)
 * Lite mode trigger conditions:
 *  - URL param ?lite=1
 *  - localStorage btw_codex_mode === 'lite'
 *  - navigator.connection.saveData === true
 *  - navigator.connection.effectiveType === '2g' or 'slow-2g'
 *  - window.matchMedia('(prefers-reduced-data: reduce)').matches
 *  - Timezone in China (Asia/Shanghai, Asia/Chongqing, Asia/Harbin, Asia/Urumqi)
 */

(function () {
  'use strict';

  function detectLiteMode() {
    try {
      // 1. Explicit query param ?lite=1
      var params = new URLSearchParams(window.location.search);
      if (params.get('lite') === '1') return true;
      if (params.get('rich') === '1') return false;

      // 2. User preference in localStorage
      var savedMode = localStorage.getItem('btw_codex_mode');
      if (savedMode === 'lite') return true;
      if (savedMode === 'rich') return false;

      // 3. Data saver / Slow network detection
      var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        if (conn.saveData === true) return true;
        if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g') return true;
      }

      // 4. prefers-reduced-data media query
      if (window.matchMedia && window.matchMedia('(prefers-reduced-data: reduce)').matches) {
        return true;
      }

      // 5. Timezone detection for China (common low-bandwidth / high-latency CDN filters)
      try {
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var chinaZones = ['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Harbin', 'Asia/Urumqi'];
        if (chinaZones.indexOf(tz) !== -1) {
          return true;
        }
      } catch (tzErr) {}

      return false;
    } catch (e) {
      return false;
    }
  }

  var isLite = detectLiteMode();
  var root = document.documentElement;

  if (isLite) {
    root.classList.add('codex-lite');
    root.classList.remove('codex-rich');
  } else {
    root.classList.add('codex-rich');
    root.classList.remove('codex-lite');

    // Dynamically ensure voynich-rich.css is loaded if not already present
    var richLink = document.getElementById('voynich-rich-css');
    if (!richLink) {
      // Find base path (relative to current document)
      var scripts = document.getElementsByTagName('script');
      var base = '';
      for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute('src') || '';
        if (src.indexOf('codex-loader.js') !== -1) {
          base = src.replace('js/codex-loader.js', '');
          break;
        }
      }
      var link = document.createElement('link');
      link.id = 'voynich-rich-css';
      link.rel = 'stylesheet';
      link.href = base + 'css/voynich-rich.css';
      document.head.appendChild(link);
    }
  }

  // Global toggle function for footer button
  window.btwToggleCodexMode = function () {
    var currentlyLite = root.classList.contains('codex-lite');
    var newMode = currentlyLite ? 'rich' : 'lite';
    localStorage.setItem('btw_codex_mode', newMode);
    
    if (newMode === 'lite') {
      root.classList.add('codex-lite');
      root.classList.remove('codex-rich');
      var richLinkEl = document.getElementById('voynich-rich-css');
      if (richLinkEl && richLinkEl.parentNode) {
        richLinkEl.parentNode.removeChild(richLinkEl);
      }
    } else {
      root.classList.add('codex-rich');
      root.classList.remove('codex-lite');
      if (!document.getElementById('voynich-rich-css')) {
        var l = document.createElement('link');
        l.id = 'voynich-rich-css';
        l.rel = 'stylesheet';
        // compute path based on document location
        var pathPrefix = window.location.pathname.indexOf('/games/') !== -1 ? '../' : '';
        l.href = pathPrefix + 'css/voynich-rich.css';
        document.head.appendChild(l);
      }
    }
    updateToggleButtons();
  };

  function updateToggleButtons() {
    var isNowLite = root.classList.contains('codex-lite');
    var btns = document.querySelectorAll('[data-codex-toggle]');
    btns.forEach(function (btn) {
      btn.innerHTML = isNowLite 
        ? 'View: <strong style="color:var(--manuscript-gold,#9E741E);">Lite</strong> | <span>Full Manuscript</span>' 
        : 'View: <span>Lite</span> | <strong style="color:var(--manuscript-rubric,#8F2D18);">Full Manuscript</strong>';
      btn.setAttribute('aria-pressed', isNowLite ? 'false' : 'true');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateToggleButtons);
  } else {
    updateToggleButtons();
  }
})();
