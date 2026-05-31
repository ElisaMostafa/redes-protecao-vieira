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
