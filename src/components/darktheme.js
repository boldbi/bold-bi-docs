// Minimal dark theme toggle: toggles `dark-mode` on <body> and <html>, persists choice, loads CSS.

const KEY = 'site_theme';

const applyTheme = (dark) => {
  if (typeof document === 'undefined') return;
  document.body.classList.toggle('dark-mode', !!dark);
  try { document.documentElement.classList.toggle('dark-mode', !!dark); } catch (_) {}
  try {
    // swap header logo for dark mode if present
    const logo = document.querySelector('.header-logo');
    if (logo && logo.tagName === 'IMG') {
      if (!logo.dataset.origSrc) logo.dataset.origSrc = logo.src || '/img/boldbi-logo.svg';
      if (dark) {
        // prefer explicit dark logo file if available
        logo.src = '/img/boldbi-logo-dark.svg';
      } else {
        logo.src = logo.dataset.origSrc || '/img/boldbi-logo.svg';
      }
    }
    // swap theme toggle icon if present
    const themeIcon = document.querySelector('.theme-toggle-icon');
    if (themeIcon && themeIcon.tagName === 'IMG') {
      if (!themeIcon.dataset.origSrcIcon) themeIcon.dataset.origSrcIcon = themeIcon.src || '/img/moon-icon.svg';
      if (dark) themeIcon.src = '/img/light-mode-sun-icon.svg';
      else themeIcon.src = themeIcon.dataset.origSrcIcon || '/img/moon-icon.svg';
    }
  } catch (_) { }
};

const getStored = () => { try { return localStorage.getItem(KEY); } catch (_) { return null; } };
const setStored = (v) => { try { localStorage.setItem(KEY, v); } catch (_) { } };

const ensureStylesheet = () => {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('dark-mode-css')) {
	const l = document.createElement('link'); l.id = 'dark-mode-css'; l.rel = 'stylesheet'; l.href = '/assets/css/dark-mode.css'; document.head.appendChild(l);
  }
};

export function initDarkThemeToggle(buttonSelector = '.theme-switch-btn') {
  if (typeof document === 'undefined') return;
  const stored = getStored();
  const prefers = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored === 'dark' || (stored == null && prefers);
  applyTheme(isDark);
  if (isDark) ensureStylesheet();

  const candidates = [buttonSelector, '#theme-toggle-btn', '.theme-switch-btn', '[data-theme-toggle]'];
  const bind = (btn) => {
	if (!btn) return false;
	const setState = (d) => { try { btn.setAttribute('aria-pressed', d ? 'true' : 'false'); } catch (_) {} ; btn.classList.toggle('dark-active', d); };
	setState(isDark);
	btn.addEventListener('click', () => { const next = !document.body.classList.contains('dark-mode'); if (next) ensureStylesheet(); applyTheme(next); setStored(next ? 'dark' : 'light'); setState(next); });
	return true;
  };

  for (const s of candidates) { const el = document.querySelector(s); if (el) return bind(el); }

  // fallback: observe DOM for the button (stops after first match)
  const obs = new MutationObserver(() => { for (const s of candidates) { const el = document.querySelector(s); if (el) { bind(el); obs.disconnect(); return; } } });
  obs.observe(document.documentElement || document.body, { childList: true, subtree: true });
}

// auto-init (can be disabled via window.__noAutoDarkInit)
if (typeof window !== 'undefined' && !window.__noAutoDarkInit) window.addEventListener('DOMContentLoaded', () => initDarkThemeToggle());

const darkThemeModule = { initDarkThemeToggle };
export default darkThemeModule;

