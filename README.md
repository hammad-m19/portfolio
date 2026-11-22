# Portfolio

Vite + React + TypeScript + Tailwind CSS v4, with GSAP (ScrollTrigger) and Lenis.
All content comes from the resume and lives in [`src/data.ts`](src/data.ts).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the build locally
```

## Customize

- Text, links, projects, skills: `src/data.ts`
- Palette and fonts: `@theme` block in `src/index.css` (`ink` #0E0E0C, `paper` #ECE8DF, `accent` #FF5A1F)
- Fonts are self-hosted in `public/fonts` (Instrument Serif, IBM Plex Mono), preloaded, `font-display: swap`.

## Deploy

**Vercel**: push to GitHub, then Import Project. Framework preset: Vite. Build `npm run build`, output `dist`.
Or `npx vercel --prod`.

**Netlify**: push to GitHub, then New site from Git. Build command `npm run build`, publish directory `dist`.
Or `npm run build && npx netlify deploy --prod --dir=dist`.

No server or environment variables are needed. It is a static site.

## Motion notes

Only `transform` and `opacity` are animated. `prefers-reduced-motion` disables the preloader, smooth scroll,
reveals, cursor and the pinned horizontal projects scroll (it becomes a native scroll row).
The custom cursor and magnetic hover only run on fine pointers (desktop). The pinned projects scroll only runs at 1024px and up.
