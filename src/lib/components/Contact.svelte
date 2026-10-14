<script lang="ts">
  import Night from './Night.svelte';
  import { email, links } from '#lib/content.ts';
  import { gsap, SplitText, motion } from '#lib/motion.ts';
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date());
  let root: HTMLElement;
  let mail: HTMLElement;

  $effect(() =>
    motion(root, (reduce) => {
      gsap.set('.pre', { visibility: 'visible' });
      if (reduce) return;
      // Dusk to night: sky stops darken, stars and moon appear, layers parallax at different depths
      gsap.timeline({ scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom bottom', scrub: 0.6 } })
        .to('.s1', { attr: { 'stop-color': '#aab3a3' }, ease: 'none' }, 0)
        .to('.s2', { attr: { 'stop-color': '#5f6f5f' }, ease: 'none' }, 0)
        .to('.s3', { attr: { 'stop-color': '#34463a' }, ease: 'none' }, 0)
        .to('.s4', { attr: { 'stop-color': '#1f2f25' }, ease: 'none' }, 0)
        .to('.s5', { attr: { 'stop-color': '#17251b' }, ease: 'none' }, 0)
        .to('.stars', { opacity: 1, y: -60, ease: 'none' }, 0.2)
        .to('.moon', { opacity: 1, y: -90, ease: 'none' }, 0.1)
        .fromTo('.r1', { y: 420 }, { y: 0, ease: 'power1.out', duration: 0.8 }, 0.25)
        .fromTo('.r2', { y: 640 }, { y: 0, ease: 'power1.out', duration: 0.75 }, 0.35);
      gsap.to('.star', { opacity: 0.15, duration: () => 1 + Math.random() * 2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: { each: 0.05, from: 'random' } });
      SplitText.create('.hello', {
        type: 'chars',
        mask: 'chars',
        charsClass: 'ch',
        aria: 'none',
        onSplit: (self) => gsap.from(self.chars, { yPercent: 110, duration: 1, stagger: 0.03, ease: 'power4.out', scrollTrigger: { trigger: '.hello', start: 'top 85%' } })
      });
      gsap.from('.label, footer', { autoAlpha: 0, y: 16, duration: 0.9, stagger: 0.2, scrollTrigger: { trigger: root, start: 'top 75%' } });
    })
  );

  function scramble() {
    gsap.to(mail, { duration: 1, scrambleText: { text: email, chars: 'lowerCase', speed: 0.6 } });
  }
</script>

<section id="contact" class="contact" bind:this={root}>
  <Night />
  <p class="label pre">Have something calm to build?</p>
  <a class="mail" href="mailto:{email}" onmouseenter={scramble} onfocus={scramble}>
    <span class="hello pre">Say hello</span>
    <em bind:this={mail}>{email}</em>
  </a>
  <footer class="pre">
    <span>© {year} Sina</span>
    <nav>
      {#each links as [name, href]}
        <a {href} target="_blank" rel="noreferrer">{name}</a>
      {/each}
    </nav>
  </footer>
</section>

<style>
  .contact { position: relative; overflow: hidden; min-height: 150svh; display: grid; align-content: end; padding: clamp(6rem, 14vw, 12rem) var(--t-gutter) 2rem; color: #eef3ee; }
  .label { font-size: 0.875rem; color: #9fb3a3; margin-bottom: 2rem; }
  .mail { display: grid; gap: 0.25em; font-size: clamp(2.5rem, 8vw, 7.5rem); line-height: 1; letter-spacing: -0.03em; }
  .hello { display: block; }
  .mail em { color: #f6d98a; font-size: 0.75em; }
  footer { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: clamp(4rem, 10vw, 8rem); font-size: 0.875rem; color: #9fb3a3; }
  nav { display: flex; gap: 1.5rem; }
  nav a:hover { color: #f6d98a; }
</style>
