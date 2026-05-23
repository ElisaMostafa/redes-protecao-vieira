// ── Render: injeta depoimentos, whyus e galeria ──

function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  CONFIG.testimonials.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "testimonial-card fade-in";
    card.setAttribute("data-delay", (i * 0.1).toFixed(1));
    card.innerHTML = `
      <div class="testimonial-card__quote">"</div>
      <p class="testimonial-card__text">${t.text}</p>
      <div class="testimonial-card__footer">
        <div class="testimonial-card__avatar">${t.name[0]}</div>
        <div>
          <div class="testimonial-card__name">${t.name}</div>
          <div class="testimonial-card__city">${t.city}</div>
        </div>
        <div class="testimonial-card__stars">★★★★★</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderWhyUs() {
  const grid = document.getElementById("whyusGrid");
  CONFIG.whyItems.forEach((w, i) => {
    const card = document.createElement("div");
    card.className = "why-card fade-in";
    card.setAttribute("data-delay", (i * 0.1).toFixed(1));
    card.innerHTML = `
      <div class="why-card__icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  CONFIG.gallery.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "gallery-item fade-in";
    el.setAttribute("data-delay", (i * 0.06).toFixed(2));

    // Net SVG
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("class", "gallery-item__net");
    svg.setAttribute("aria-hidden", "true");
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const rect = document.createElementNS(ns, "rect");
        rect.setAttribute("x", r * 25); rect.setAttribute("y", c * 25);
        rect.setAttribute("width", "21"); rect.setAttribute("height", "21");
        rect.setAttribute("rx", "3");
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", "white");
        rect.setAttribute("stroke-width", "1.5");
        svg.appendChild(rect);
      }
    }

    const bg = document.createElement("div");
    bg.className = "gallery-item__bg";
    bg.style.cssText = `background:${item.gradient}; width:100%; height:100%;`;

    const overlay = document.createElement("div");
    overlay.className = "gallery-item__overlay";
    const label = document.createElement("span");
    label.className = "gallery-item__label";
    label.textContent = item.label;
    overlay.appendChild(label);

    el.append(bg, svg, overlay);
    grid.appendChild(el);
  });
}
