function initAnimations() {
  // Scroll fade/slide para seções
  const targets = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));

  // Stagger mini-cards
  const cards = document.querySelectorAll(".mini-card");
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = [...cards].indexOf(e.target);
        e.target.style.animationDelay = `${i * 0.1 + 0.1}s`;
        e.target.classList.add("visible");
        cardObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => cardObserver.observe(c));
}