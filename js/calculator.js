// ── Calculator ──

function initCalculator() {
  const slider = document.getElementById("m2Slider");
  const m2Display = document.getElementById("m2Display");
  const netLabel = document.getElementById("netLabel");
  const netValue = document.getElementById("netValue");
  const laborLabel = document.getElementById("laborLabel");
  const laborValue = document.getElementById("laborValue");
  const totalValue = document.getElementById("totalValue");

  const { netPerM2, laborPerM2, sliderMin, sliderMax, sliderDefault } = CONFIG.pricing;

  slider.min = sliderMin;
  slider.max = sliderMax;
  slider.value = sliderDefault;

  function update() {
    const m2 = Number(slider.value);
    const net = m2 * netPerM2;
    const labor = m2 * laborPerM2;
    const total = net + labor;

    // Update range track fill
    const pct = ((m2 - sliderMin) / (sliderMax - sliderMin)) * 100;
    slider.style.background = `linear-gradient(to right, #2563eb ${pct}%, #e2e8f0 ${pct}%)`;

    m2Display.textContent = `${m2} m²`;
    netLabel.textContent = `Rede (${m2} m² × R$ ${netPerM2})`;
    netValue.textContent = `R$ ${formatBRL(net)}`;
    laborLabel.textContent = `Mão de obra (${m2} m² × R$ ${laborPerM2})`;
    laborValue.textContent = `R$ ${formatBRL(labor)}`;
    totalValue.textContent = `R$ ${formatBRL(total)}`;
  }

  slider.addEventListener("input", update);
  update();
}
