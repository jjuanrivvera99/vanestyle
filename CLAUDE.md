# CLAUDE.md — VaneStyle Website

This file provides guidance to AI Agents when working within the `website/` subproject.

For full business context, brand guidelines, and cross-domain skills, see `../AGENTS.md`.

## Development Commands

```bash
pnpm dev          # Dev server at localhost:4321
pnpm build        # Production build to dist/
pnpm preview      # Preview production build
pnpm format       # Format with Prettier
pnpm format:check # Check formatting
```

Package manager: **pnpm** (not npm/yarn).

## Key Conventions

- **Tailwind CSS 4**: CSS-first config with `@theme` in `src/styles/global.css` — no `tailwind.config.js`
- **Config-driven**: All business data in `src/config/` (site.ts, services.ts, faq.ts, navigation.ts) — never hardcode in components
- **Path aliases**: `@components`, `@config`, `@layouts`, `@utils`, `@assets`, `@types`, `@styles` — defined in both `tsconfig.json` and `astro.config.mjs`
- **Content language**: UI text in Colombian Spanish, code/comments in English
- **Images**: Use Astro's `<Image>` component for optimization. Source images in `public/img/`, processed via Sharp to WebP
- **Interactivity**: Alpine.js for minimal JS (mobile menu, FAQ accordion). AOS for scroll animations
- **SEO**: JSON-LD schemas generated via `src/utils/seo.ts`. Meta tags in `src/layouts/Layout.astro`

## Price Updates

When updating prices, ensure `src/config/services.ts` matches the canonical source at `../business/services.md`. Use the `/sync-prices` skill for automated comparison.
