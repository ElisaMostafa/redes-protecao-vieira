// ── Before / After drag ──

function initBeforeAfter() {
  const container   = document.getElementById("baContainer");
  const beforePanel = document.getElementById("baBeforePanel");
  const divider     = document.getElementById("baDivider");
  const netSvg      = container.querySelector(".ba__net");

  if (netSvg) buildBaNetSvg(netSvg);

  let dragging = false;
  let pos = 50; // percentage

  function setPos(pct) {
    pos = Math.min(Math.max(pct, 2), 98);
    divider.style.left             = `${pos}%`;
    beforePanel.style.clipPath     = `inset(0 0 0 ${pos}%)`;
  }

  function getPercent(clientX) {
    const rect = container.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  // Mouse
  container.addEventListener("mousedown", e => { dragging = true; setPos(getPercent(e.clientX)); });
  window.addEventListener("mousemove",    e => { if (dragging) setPos(getPercent(e.clientX)); });
  window.addEventListener("mouseup",      ()  => { dragging = false; });

  // Touch
  container.addEventListener("touchstart", e => { dragging = true; setPos(getPercent(e.touches[0].clientX)); }, { passive: true });
  window.addEventListener("touchmove",     e => { if (dragging) setPos(getPercent(e.touches[0].clientX)); }, { passive: true });
  window.addEventListener("touchend",      ()  => { dragging = false; });

  setPos(50);
}
