const logo = document.querySelector('.json-logo');

if (logo) {
  const minScale = 0.7;
  const maxScale = 1;
  const scrollRange = 250;
  let lastY = window.scrollY;
  let ticking = false;

  const updateScale = () => {
    const scrollTop = window.scrollY;
    const progress = Math.min(scrollTop / scrollRange, 1);
    const scale = Math.max(minScale, maxScale - progress * (maxScale - minScale));
    logo.style.setProperty('--json-scale', scale.toFixed(3));
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScale);
      ticking = true;
    }
  }, { passive: true });
}
