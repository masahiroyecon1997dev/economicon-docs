# Economicon Pages — Agent Instructions

## Project Overview
Documentation site for **Economicon** (Windows GUI econometrics app). Built with [Astro](https://docs.astro.build) + [Starlight](https://starlight.astro.build/).

## Commands
```bash
pnpm dev       # Dev server at localhost:4321
pnpm build     # Production build to ./dist/
pnpm preview   # Preview production build
```

## Content Structure
All docs live in `src/content/docs/`. Files become routes based on their path:
- **Japanese (root locale):** `src/content/docs/*.mdx` and subdirectories
- **English:** `src/content/docs/en/*.mdx`

Sidebar sections auto-generate from `guides/` and `reference/` directories (configured in `astro.config.mjs`).

## Key Conventions
- Use `.mdx` for interactive pages (supports Starlight components), `.md` for plain content
- Import Starlight components: `import { Card, CardGrid, Steps } from '@astrojs/starlight/components'`
- Front-matter fields: `title`, `description`, and optionally `template: splash` (for homepage)
- Content must exist in **both** `root` (Japanese) and `en/` (English) for full bilingual support
- Styling via CSS custom properties in `src/style/costom.css` (filename has a typo — do NOT rename it, as it is referenced in `astro.config.mjs`)

## Architecture
- `astro.config.mjs` — site title, i18n locales, sidebar, favicon, social links
- `src/content.config.ts` — content collection schema (Starlight's `docsLoader` + `docsSchema`)
- `src/style/costom.css` — theme overrides using Starlight CSS variables (`--sl-color-*`)
- `public/` — static assets (favicon, icons)
- `src/assets/` — images optimized by Astro's image pipeline

## Pitfalls
- The CSS file is `src/style/costom.css` (typo, not `custom.css`) — keep as-is to avoid breaking the build
- TypeScript config uses `astro/tsconfigs/strict` — respect strict type checks
- GitHub social link in `astro.config.mjs` has an empty `href: ''` — fill in before deploying
