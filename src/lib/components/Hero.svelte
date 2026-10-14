<script lang="ts">
  import Scene from "./Scene.svelte";
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dhaka' });
  let time = $state(fmt.format(new Date()));
  $effect(() => {
    const id = setInterval(() => (time = fmt.format(new Date())), 10_000);
    return () => clearInterval(id);
  });
</script>

<section class="hero">
  <Scene />
  <header class="bar">
    <span class="fade" style="--i:0">Sina</span>
    <a class="fade status" style="--i:1" href="#contact"><i></i>Open to work</a>
    <span class="fade" style="--i:2">Dhaka · {time}</span>
  </header>

  <h1>
    <span class="line"><span style="--i:0">Software engineer</span></span>
    <span class="line"><span style="--i:1">building <em>calm,</em></span></span>
    <span class="line"><span style="--i:2">well-made products.</span></span>
  </h1>

  <footer class="foot">
    <p class="fade" style="--i:3">
      I design and ship backends and interfaces that stay simple under load.
      Currently working on video infrastructure.
    </p>
    <a class="fade cta" style="--i:4" href="#work">
      Selected work <span aria-hidden="true">↓</span>
    </a>
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
  .bar, .foot {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--t-mute);
  }
  .status { display: inline-flex; align-items: center; gap: 0.5rem; }
  .status i {
    width: 0.5rem; height: 0.5rem; border-radius: 50%;
    background: var(--t-accent);
    animation: pulse 2s ease-in-out infinite;
  }
  h1 {
    align-self: center;
    font-weight: 400;
    font-size: clamp(2.75rem, 9vw, 8.5rem);
    line-height: 0.98;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }
  h1 em { color: var(--t-accent); letter-spacing: -0.01em; font-size: 1.02em; font-weight: 400; }
  .foot { align-items: flex-end; color: #e9f0ea; }
  .foot p { max-width: 34ch; color: #f4f7f3; }
  .cta {
    flex-shrink: 0;
    color: #eef5f0;
    display: inline-flex; gap: 0.5rem;
    border-bottom: 1px solid #eef5f0;
    padding-bottom: 2px;
    transition: color 0.3s, border-color 0.3s;
  }
  .cta:hover { color: #f6d98a; border-color: #f6d98a; }
  .cta span { transition: transform 0.4s var(--t-ease); }
  .cta:hover span { transform: translateY(3px); }
  @keyframes pulse { 50% { opacity: 0.35; } }
  @media (max-width: 640px) {
    .foot { flex-direction: column; align-items: flex-start; }
    .bar span:last-child { display: none; }
  }
  @media (prefers-reduced-motion: reduce) { .status i { animation: none; } }
</style>
