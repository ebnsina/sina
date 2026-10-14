<script lang="ts">
  import Hero from '#lib/components/Hero.svelte';
  import Work from '#lib/components/Work.svelte';
  import About from '#lib/components/About.svelte';
  import Contact from '#lib/components/Contact.svelte';
  import { site, name, email, whatsapp, title, description, projects } from '#lib/content.ts';

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url: site,
    email,
    telephone: whatsapp,
    jobTitle: 'Software engineer',
    address: { '@type': 'PostalAddress', addressCountry: 'BD' },
    sameAs: ['https://github.com/ebnsina'],
    knowsAbout: ['Rust', 'Go', 'TypeScript', 'PostgreSQL', 'ClickHouse', 'Svelte', 'SvelteKit', 'Video infrastructure'],
    hasOccupation: { '@type': 'Occupation', name: 'Software engineer' },
    owns: projects.map((p) => ({ '@type': 'SoftwareApplication', name: p.title, description: p.what }))
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={site} />
  <meta name="author" content={name} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="#f4f1ea" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={site} />
  <meta property="og:image" content="{site}/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Sina, software engineer building calm, well-made products" />
  <meta property="og:locale" content="en_GB" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{site}/og.png" />
  {@html `<script type="application/ld+json">${jsonld}</script>`}
</svelte:head>

<Hero />
<Work />
<About />
<Contact />
