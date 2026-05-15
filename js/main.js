// ── main.js — inicializa tudo ──

document.addEventListener("DOMContentLoaded", () => {

  // 1. Aplica links do WhatsApp
  applyWaLinks();

  // 2. Injeta conteúdo dinâmico
  renderTestimonials();
  renderWhyUs();
  renderGallery();

  // 3. Inicializa módulos
  initHeader();
  initHero();
  initServices();
  initCalculator();
  initBeforeAfter();

  // 4. Ativa animações de scroll (deve ser por último,
  //    após todos os elementos serem injetados no DOM)
  initAnimations();

});
