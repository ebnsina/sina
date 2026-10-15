# Changelog

## Unreleased
- One-page portfolio: hero with animated dawn scene, selected work, about, contact.
- Fonts: Trench Slab for text, Fraunces italic for accents.
- SEO: canonical, Open Graph and Twitter tags, JSON-LD Person, robots.txt, sitemap.xml, llms.txt, OG image, favicon.
- Motion: GSAP ScrollTrigger and SplitText throughout; hero parallax, scroll-inked about statement, dusk-to-night footer with parallax layers and twinkling stars.
- Removed the principles block.
- Footer ridges rise on scroll; dusk palette warmed; bold logo; Bangladesh in place of Dhaka; WhatsApp link; hash-free in-page scroll; descender-safe text masks.
- Deploy: Cloudflare Pages, connected to the GitHub repo; every push to main publishes to ebnsina.pages.dev. Moved off GitHub Pages because github.io was unreachable from local mobile carriers.
- Performance: self-hosted, subsetted fonts with preload; CSS inlined at build; grain filter removed; headline paints before JS. Accessibility: main landmark, SplitText without aria-label, mask-based about reveal.
