function setExternalTargets() {
  const host = location.host;
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    try {
      const url = new URL(a.href);
      if (url.host !== host) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      }
    } catch (_) {}
  });
}
window.addEventListener('load', setExternalTargets);
if (window.document$) document$.subscribe(setExternalTargets);
