function initHeader() {
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    // O header já tem backdrop nativo; scroll apenas reforça sombra
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}