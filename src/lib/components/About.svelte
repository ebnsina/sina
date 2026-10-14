<script lang="ts">
  import { gsap, SplitText, motion } from '#lib/motion.ts';
  let root: HTMLElement;

  $effect(() =>
    motion(root, (reduce) => {
      gsap.set('.pre', { visibility: 'visible' });
      if (reduce) return;
      // Words ink in as you scroll through the statement
      SplitText.create('.big', {
        type: 'words',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.words, { opacity: 0.12, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: '.big', start: 'top 80%', end: 'bottom 55%', scrub: true } })
      });
    })
  );
</script>

<section id="about" class="about" bind:this={root}>
  <p class="big pre">
    I'm Sina, a software engineer in Dhaka. I build backends in Go and interfaces in Svelte,
    and I care most about the parts nobody sees: <em>clear errors, honest pricing, code that stays small.</em>
  </p>
</section>

<style>
  .about { padding: clamp(4rem, 10vw, 9rem) var(--t-gutter) 0; }
  .big { font-size: clamp(1.5rem, 3.2vw, 2.75rem); line-height: 1.25; letter-spacing: -0.015em; max-width: 30ch; text-wrap: balance; }
  .big em { color: var(--t-accent); }
</style>
