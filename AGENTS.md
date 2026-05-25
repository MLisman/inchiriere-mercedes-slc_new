# AGENTS.md

## Project Overview

Single-page marketing/landing site for a classic Mercedes-Benz SL 280 car rental service in Cluj-Napoca, Romania. The entire site is contained in `src/routes/index.tsx` — no product catalog, no AI assistant, no multi-page routing. Built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
  gallery/         # Car photos (car-01.jpg, car-08.png … car-30.png)
src/
  data/
    products.ts    # Unused scaffold remnant — do not rely on it
  routes/
    __root.tsx     # HTML shell, <head> meta, Google Fonts link tags
    index.tsx      # Full landing page (hero, gallery, services, pricing, CTA, footer)
    products/      # Unused scaffold routes
  styles.css       # Tailwind import + CSS custom properties + animations + gallery grid
  router.tsx       # TanStack Router setup
```

## Architecture Decisions

### Single-file landing page
All sections (hero, gallery, services, pricing, CTA, footer) live in `src/routes/index.tsx`. Inline SVG icon components are defined at the bottom of the same file. No external icon library is used.

### Design system via CSS custom properties
Colors are defined in `:root` in `src/styles.css`:
- `--ink` / `--ink-soft` / `--ink-muted`: dark background scale
- `--gold` / `--gold-light` / `--gold-dim`: champagne gold accent scale
- `--cream` / `--text-primary` / `--text-secondary` / `--text-muted`: text scale

Typography: Cormorant Garamond (display) + Jost (body), loaded via Google Fonts in `__root.tsx`.

### Gallery grid
Uses a named CSS Grid with explicit placement classes (`g1`–`g8`) in `styles.css`. Collapses to 2-column on mobile with `!important` overrides.

### Grain texture
Applied via `body::before` with a fixed SVG data URI. Must stay on a `position: fixed` non-scrolling element — do NOT move to a scrolling container.

## Contact Information (hardcoded constants)

Defined at the top of `src/routes/index.tsx`:
```ts
const PHONE = '0750 449 650'
const PHONE_HREF = 'tel:+40750449650'
const WHATSAPP_HREF = 'https://wa.me/40750449650'
const EMAIL = 'inchirierimercedessl@gmail.com'
```

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npx netlify dev  # Netlify CLI dev server (port 8888, recommended)
npm run build    # Production build
```

## Conventions

- TypeScript strict mode; use `type` keyword for type-only imports
- Import paths use `@/` alias for `src/*`
- Tailwind utility classes for layout; custom CSS for design tokens and complex effects
- PascalCase components, camelCase hooks/utils
- No external component libraries on this project
