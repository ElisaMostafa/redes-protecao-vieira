// ── Helpers reutilizáveis ──

/** Retorna a URL do WhatsApp com mensagem pré-preenchida */
function getWaUrl() {
  const { number, message } = CONFIG.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Formata número como moeda BRL */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Aplica href do WhatsApp a todos os elementos com [data-wa] */
function applyWaLinks() {
  const url = getWaUrl();
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = url;
    if (el.tagName === "A") el.target = "_blank";
    el.rel = "noreferrer";
  });
}

/** Constrói o SVG da rede (grade de quadrados) e injeta no elemento */
function buildNetSvg(svgEl, cols = 20, rows = 20, gap = 22, size = 18) {
  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", i * gap);
      rect.setAttribute("y", j * gap);
      rect.setAttribute("width", size);
      rect.setAttribute("height", size);
      rect.setAttribute("rx", "3");
      rect.setAttribute("fill", "none");
      rect.setAttribute("stroke", "#60a5fa");
      rect.setAttribute("stroke-width", "1.5");
      rect.style.opacity = 0.4 + Math.sin(i + j) * 0.3;
      svgEl.appendChild(rect);
    }
  }
}

/** Constrói a grade da rede para o before/after */
function buildBaNetSvg(svgEl) {
  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 14; j++) {
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", i * 25);
      rect.setAttribute("y", j * 23);
      rect.setAttribute("width", "21");
      rect.setAttribute("height", "19");
      rect.setAttribute("rx", "3");
      rect.setAttribute("fill", "none");
      rect.setAttribute("stroke", "#60a5fa");
      rect.setAttribute("stroke-width", "2");
      svgEl.appendChild(rect);
    }
  }
}
