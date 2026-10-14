<script lang="ts">
  import { email, links } from '#lib/content.ts';
  import { reveal } from '#lib/reveal.ts';
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date());
</script>

<section id="contact" class="contact">
  <p class="label reveal" use:reveal>Have something calm to build?</p>
  <a class="mail reveal" use:reveal style="--i:1" href="mailto:{email}">
    <span class="line"><span>Say hello</span></span>
    <span class="line"><span><em>{email}</em></span></span>
  </a>
  <footer class="reveal" use:reveal style="--i:2">
    <span>© {year} Sina</span>
    <nav>
      {#each links as [name, href]}
        <a {href} target="_blank" rel="noreferrer">{name}</a>
      {/each}
    </nav>
  </footer>
</section>

<style>
  .contact { padding: clamp(4rem, 10vw, 9rem) var(--t-gutter) 2rem; border-top: 1px solid var(--t-line); }
  .label { font-size: 0.875rem; color: var(--t-mute); margin-bottom: 2rem; }
  .mail { display: block; font-size: clamp(2.5rem, 8vw, 7.5rem); line-height: 1; letter-spacing: -0.03em; }
  .mail em { color: var(--t-accent); font-size: 0.8em; transition: letter-spacing 0.5s var(--t-ease); }
  .mail:hover em { letter-spacing: 0.01em; }
  .mail .line > span { animation: none; transform: none; }
  footer { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: clamp(4rem, 10vw, 8rem); font-size: 0.875rem; color: var(--t-mute); }
  nav { display: flex; gap: 1.5rem; }
  nav a:hover { color: var(--t-accent); }
</style>
