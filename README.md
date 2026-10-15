# Sina

One-page portfolio. Live at <https://sina.ebnsina.workers.dev/>.

Software engineer in Bangladesh building calm, well-made products. Backends in Rust and Go on PostgreSQL and ClickHouse, interfaces in TypeScript with Svelte and SvelteKit.

## Stack

- SvelteKit 2, Svelte 5, TypeScript. Prerendered to static HTML.
- GSAP with ScrollTrigger, SplitText and ScrambleText for motion.
- Trench Slab (Fontshare) for text, Fraunces italic (Google Fonts) for accents.
- No UI kit, no images. The dawn and night scenes are inline SVG.

## Run

```sh
pnpm install
pnpm dev
```

`pnpm build` writes a static site to `build/`.

## Edit

- Copy, projects and links: `src/lib/content.ts`
- Sections: `src/lib/components/{Hero,Work,About,Contact}.svelte`
- Scenes: `src/lib/components/{Scene,Night}.svelte`
- Design tokens: `src/app.css`

## Deploy

Cloudflare Workers Builds is connected to this repo. Every push to `main` runs `pnpm build` and `npx wrangler deploy`, which serves `build/` as static assets per `wrangler.jsonc` at sina.ebnsina.workers.dev.
