(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const meta = document.querySelector('meta[name=theme-color]');
  const key = 'herr-systems-retro-theme';
  function paint(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.innerHTML = `<span aria-hidden="true">${dark ? '☾' : '☀'}</span> ${dark ? 'DARK MODE' : 'LIGHT MODE'}`;
    meta.content = dark ? '#16073d' : '#eaf5ff';
  }
  paint(localStorage.getItem(key) || 'dark');
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(key, next);
    paint(next);
  });
})();
