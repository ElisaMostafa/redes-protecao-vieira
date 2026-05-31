function initServices() {
  const grid = document.getElementById("servicesGrid");

  // Injeta os cards
  CONFIG.services.forEach(s => {
    const card = document.createElement("div");
    card.className = "service-card fade-in";
    card.innerHTML = `
      <div class="service-card__inner">
        <div class="service-card__icon service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  // Efeito spotlight — atualiza posição do mouse em cada card
  grid.addEventListener("mousemove", e => {
    for (const card of grid.getElementsByClassName("service-card")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  });
}