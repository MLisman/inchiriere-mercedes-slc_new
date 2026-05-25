# Mercedes-Benz SL 280 Classic Rental

Landing page for renting a restored Mercedes-Benz SL 280 classic car in Cluj-Napoca, Romania. The site showcases the vehicle, services, pricing, and provides direct contact for reservations.

## Key Technologies

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS properties |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (or `http://localhost:8888` via Netlify CLI).

To use the Netlify CLI for local emulation (recommended):

```bash
npx netlify dev
```

## Project Structure

```
src/
  routes/
    __root.tsx   # Root layout, <head> meta, Google Fonts
    index.tsx    # Full landing page component
  styles.css     # Tailwind + custom CSS variables, animations, grid
public/
  gallery/       # Car photos copied from upload session
```
