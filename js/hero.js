function initHero() {

  // Stagger mini-cards in on load
  const cards = document.querySelectorAll('.mini-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = [...cards].indexOf(e.target);

        e.target.style.animationDelay = `${i * 0.1 + 0.1}s`;
        e.target.classList.add('visible');

        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => observer.observe(c));

}