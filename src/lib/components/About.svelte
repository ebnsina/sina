<script lang="ts">
  import { principles } from '#lib/content.ts';
  import { reveal } from '#lib/reveal.ts';
</script>

<section id="about" class="about">
  <p class="big reveal" use:reveal>
    I'm Sina, a software engineer in Dhaka. I build backends in Go and interfaces in Svelte,
    and I care most about the parts nobody sees: <em>clear errors, honest pricing, code that stays small.</em>
  </p>
  <ol>
    {#each principles as [t, d], i}
      <li class="reveal" use:reveal style="--i:{i}">
        <em class="n">0{i + 1}</em>
        <h3>{t}</h3>
        <p>{d}</p>
      </li>
    {/each}
  </ol>
</section>

<style>
  .about { padding: clamp(4rem, 10vw, 9rem) var(--t-gutter); display: grid; gap: clamp(3rem, 8vw, 6rem); }
  .big { font-size: clamp(1.5rem, 3.2vw, 2.75rem); line-height: 1.25; letter-spacing: -0.015em; max-width: 30ch; text-wrap: balance; }
  .big em { color: var(--t-accent); }
  ol { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: 3rem 2.5rem; }
  .n { display: block; font-size: 2rem; line-height: 1; color: var(--t-accent); margin-bottom: 1.25rem; }
  h3 { font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem; }
  li p { color: var(--t-mute); max-width: 32ch; }
</style>
