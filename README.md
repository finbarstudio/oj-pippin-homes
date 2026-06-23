# OJ Pippin Homes — concept site

A luxury-boutique concept build for OJ Pippin Homes (Brisbane home builder, est. 1994),
created as a pitch/demo. Content is sourced and re-voiced from ojpippin.com.au.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **GSAP** + ScrollTrigger + SplitText (scroll animation)
- **Lenis** (smooth scroll)
- Type: **Fraunces** (display serif) + **Hanken Grotesk** (UI/body), via `next/font`

## Design language
- Warm heritage-luxury palette — bone paper, espresso ink, terracotta *clay* accent,
  olive, umber dark sections. Tokens live in `app/globals.css`.
- Custom **“pip” seed emblem** (`components/PipMark.tsx`) — a nod to *Pippin*.
- In place of award laurels, the brand flex is **heritage + scale**: a count-up of
  *30 years · 1,000 homes · 100% fixed price* (`components/sections/Manifesto.tsx`).

## Run it
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure
- `app/page.tsx` — home (Hero → Manifesto → DesignShowcase → Services → Inclusions →
  Process → WhyUs → Testimonials → Contact → Footer)
- `app/about/page.tsx` — heritage story
- `app/designs/page.tsx` — the range (lookbook + full index)
- `lib/content.ts` — all copy and data in one place
- `components/` — engine (SmoothScroll, Preloader, ViewCursor, CountUp, ScrollText)
- `components/sections/` — page sections
- `public/homes/` — imagery (sourced from ojpippin.com.au for the demo)
