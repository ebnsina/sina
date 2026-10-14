<script lang="ts">
  import Scene from './Scene.svelte';
  import { gsap, SplitText, motion } from '#lib/motion.ts';

  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dhaka' });
  let time = $state(fmt.format(new Date()));
  let root: HTMLElement;
  // Scroll without writing the hash into the URL
  function go(e: MouseEvent) { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }

  $effect(() => {
    const id = setInterval(() => (time = fmt.format(new Date())), 10_000);
    return () => clearInterval(id);
  });

  $effect(() =>
    motion(root, (reduce) => {
      const d = (n: number) => (reduce ? 0 : n);
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
      intro
        .to('.ridge', { y: 0, duration: d(1.6), stagger: 0.12 }, 0)
        .to('.sun', { y: 0, duration: d(3), ease: 'power2.out' }, 0.2)
        .from('.fade', { autoAlpha: 0, y: 10, duration: d(0.9), stagger: 0.1 }, 0.8);

      SplitText.create('h1', {
        type: 'lines,words',
        mask: 'lines',
        linesClass: 'ln',
        autoSplit: true,
        onSplit: (self) => {
          gsap.set('h1', { visibility: 'visible' });
          return gsap.from(self.words, { yPercent: 110, duration: d(1.2), stagger: 0.04, ease: 'power4.out', delay: 0.2 });
        }
      });

      if (reduce) return;
      // Scroll parallax: ridges drift apart, sun sinks, headline recedes
      gsap.timeline({ scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true } })
        .to('.ridge', { y: (i) => -40 * (3 - i), ease: 'none' }, 0)
        .to('.sun', { y: 90, ease: 'none' }, 0)
        .to('h1', { y: 120, autoAlpha: 0.2, ease: 'none' }, 0);
    })
  );
</script>

<section class="hero" bind:this={root}>
  <Scene />
  <header class="bar">
    <span class="fade logo">Sina</span>
    <span class="fade">Bangladesh · {time}</span>
  </header>

  <h1 class="pre">Software engineer<br />building <em>calm,</em><br />well-made products.</h1>

  <footer class="foot">
    <p class="fade">
      I design and ship backends and interfaces that stay simple under load.
      Currently working on video infrastructure.
    </p>
    <a class="fade cta" href="#work" onclick={go}>Selected work <span aria-hidden="true">↓</span></a>
  </footer>
</section>

<style>
  .hero {
    position: relative; overflow: hidden;
    min-height: 100svh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: var(--t-gutter);
    gap: 2rem;
  }
  .logo { font-weight: 700; font-size: 1.25rem; color: var(--t-ink); letter-spacing: -0.02em; }
  .bar, .foot { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; font-size: 0.875rem; color: var(--t-mute); }
  h1 {
    align-self: center;
    font-weight: 400;
    font-size: clamp(2.75rem, 9vw, 8.5rem);
    line-height: 0.98;
    letter-spacing: -0.03em;
  }
  h1 em { color: var(--t-accent); letter-spacing: -0.01em; font-size: 1.02em; font-weight: 400; }
  .foot { align-items: flex-end; color: #e9f0ea; }
  .foot p { max-width: 34ch; color: #f4f7f3; }
  .cta { flex-shrink: 0; color: #eef5f0; display: inline-flex; gap: 0.5rem; border-bottom: 1px solid #eef5f0; padding-bottom: 2px; transition: color 0.3s, border-color 0.3s; }
  .cta:hover { color: #f6d98a; border-color: #f6d98a; }
  .cta span { transition: transform 0.4s var(--t-ease); }
  .cta:hover span { transform: translateY(3px); }
  @media (max-width: 640px) {
    .foot { flex-direction: column; align-items: flex-start; }
    .bar span:last-child { display: none; }
  }
</style>
