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

    const bg = document.createElement("div");
    bg.className = "gallery-item__bg";
    const bgImage = item.image ? `url('${item.image}') center/cover no-repeat, ` : "";
    bg.style.cssText = `background:${bgImage}${item.gradient}; width:100%; height:100%;`;

    const overlay = document.createElement("div");
    overlay.className = "gallery-item__overlay";

    const label = document.createElement("span");
    label.className = "gallery-item__label";
    label.textContent = item.label;

    const zoomIcon = document.createElement("span");
    zoomIcon.className = "gallery-item__zoom";
    zoomIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`;

    overlay.append(label, zoomIcon);
    el.append(bg, overlay);

    // Wrap com link GLightbox
    const link = document.createElement("a");
    link.href = item.image;
    link.className = "glightbox";
    link.setAttribute("data-gallery", "galeria");
    link.setAttribute("data-description", item.label);
    link.style.cssText = "display:contents;";

    link.appendChild(el);
    grid.appendChild(link);
  });
}
