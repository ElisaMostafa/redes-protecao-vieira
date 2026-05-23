// ── Services carousel ──

function initServices() {
  const track = document.getElementById("servicesTrack");
  const dotsEl = document.getElementById("servicesDots");
  const prev = document.getElementById("servicesPrev");
  const next = document.getElementById("servicesNext");

  let idx = 0;

  // Inject cards
  CONFIG.services.forEach(s => {
    const card = document.createElement("div");
    card.className = "service-card fade-in";
    card.innerHTML = `
      <div class="service-card__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#" class="service-card__link" data-wa>Saiba mais →</a>
    `;
    track.appendChild(card);
  });

  // Inject dots
  const maxIdx = Math.max(0, CONFIG.services.length - visibleCount());
  for (let i = 0; i <= maxIdx; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(dot);
  }

  function visibleCount() {
    if (window.innerWidth >= 900) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }

  function goTo(i) {
    const max = Math.max(0, CONFIG.services.length - visibleCount());
    idx = Math.min(Math.max(i, 0), max);
    const cardWidth = track.querySelector(".service-card").offsetWidth + 24; // gap=24
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
    dotsEl.querySelectorAll(".carousel-dot").forEach((d, j) => d.classList.toggle("active", j === idx));
    prev.disabled = idx === 0;
    next.disabled = idx >= max;
  }

  prev.addEventListener("click", () => goTo(idx - 1));
  next.addEventListener("click", () => goTo(idx + 1));
  window.addEventListener("resize", () => goTo(idx));

  goTo(0);
}
