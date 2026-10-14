<script lang="ts">
  import { projects } from '#lib/content.ts';
  import { gsap, motion } from '#lib/motion.ts';
  let root: HTMLElement;

  $effect(() =>
    motion(root, (reduce) => {
      gsap.set('.pre', { visibility: 'visible' });
      if (reduce) return;
      gsap.from('.head', { autoAlpha: 0, y: 20, duration: 1, scrollTrigger: { trigger: '.head', start: 'top 85%' } });
      gsap.utils.toArray<HTMLElement>('li').forEach((li) => {
        gsap.from(li.querySelectorAll('.t, .d'), { autoAlpha: 0, y: 50, duration: 1.1, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: li, start: 'top 85%' } });
        gsap.fromTo(li.querySelector('.n'), { y: 60 }, { y: -60, ease: 'none', scrollTrigger: { trigger: li, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    })
  );
</script>

<section id="work" class="work" bind:this={root}>
  <header class="head pre">
    <h2>Selected work</h2>
  </header>
  <ol>
    {#each projects as p, i}
      <li>
        <em class="n" aria-hidden="true">0{i + 1}</em>
        <div class="t pre">
          <h3>{p.title}</h3>
          <span class="arrow" aria-hidden="true">→</span>
        </div>
        <div class="d pre">
          <p>{p.what}</p>
          <span class="meta">{p.tags.join(' · ')}<span class="year">{p.year}</span></span>
        </div>
      </li>
    {/each}
  </ol>
</section>

<style>
  .work { background: #17251b; color: #eef3ee; padding: clamp(4rem, 10vw, 9rem) var(--t-gutter); overflow: hidden; }
  .head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; font-size: 0.875rem; color: #9fb3a3; margin-bottom: clamp(2rem, 6vw, 5rem); }
  h2 { font-size: inherit; font-weight: 400; }
  ol { list-style: none; padding: 0; display: grid; gap: clamp(2.5rem, 6vw, 5rem); }
  li { position: relative; display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem 3rem; align-items: end; padding-left: clamp(2rem, 5vw, 5rem); }
  .n {
    position: absolute; left: 0; top: -0.35em; z-index: 0;
    font-size: clamp(4rem, 10vw, 9rem); line-height: 1; color: transparent;
    -webkit-text-stroke: 1px rgb(255 255 255 / 0.22);
    transition: color 0.6s ease;
  }
  li:hover .n { color: rgb(255 255 255 / 0.06); }
  .t { position: relative; display: flex; align-items: baseline; gap: 1rem; }
  h3 { font-size: clamp(2.25rem, 5.5vw, 5rem); font-weight: 400; letter-spacing: -0.025em; line-height: 0.95; transition: color 0.4s ease; }
  li:hover h3 { color: #f6d9a3; }
  .arrow { font-size: clamp(1.5rem, 3vw, 2.5rem); color: var(--t-accent); opacity: 0; transform: translateX(-10px); transition: opacity 0.4s ease, transform 0.5s var(--t-ease); }
  li:hover .arrow { opacity: 1; transform: none; }
  .d { display: grid; gap: 0.75rem; }
  p { max-width: 38ch; color: #c9d5cb; }
  .meta { font-size: 0.875rem; color: #9fb3a3; }
  .year { margin-left: 1rem; color: #eef3ee; }
  @media (max-width: 800px) {
    li { grid-template-columns: 1fr; gap: 1rem; padding-left: 0; padding-top: 1.5rem; }
    .n { top: -0.5rem; font-size: 3.5rem; }
    .arrow { display: none; }
  }
</style>
