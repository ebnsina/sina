// Adds .in once the element scrolls into view; CSS handles the transition.
export function reveal(node: HTMLElement) {
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { node.classList.add('in'); io.disconnect(); } }, { threshold: 0.15 });
  io.observe(node);
  return { destroy: () => io.disconnect() };
}
