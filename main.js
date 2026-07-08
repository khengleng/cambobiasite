const yearNode = document.querySelector('#year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const revealNodes = document.querySelectorAll('.reveal');

const showNode = (node) => node.classList.add('visible');

const supportsObserver = 'IntersectionObserver' in window;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supportsObserver || prefersReducedMotion) {
  revealNodes.forEach(showNode);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}
