# Spotless, Toronto Cleaning Service Website

A premium, fully responsive marketing site for a Toronto cleaning company, built with
**Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**. It features a
video-background hero with looping headlines, a multi-step quote form, interactive
before/after sliders, a Google Maps widget, optimized WebP imagery, and accessible,
SEO-ready pages.

> **Branding is a placeholder.** "Spotless", the phone number, email, and address are
> stand-ins. Swap them in one place, see **Customize** below.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom "Modern Cozy" theme: warm terracotta on cream/espresso)
- **Framer Motion** for animations (all respect `prefers-reduced-motion`)
- **sharp** for image optimization

## Run it

```bash
npm install
npm run dev      # development, http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node.js 18.18+.

## Project structure

```
app/                     App Router pages, layout, metadata, robots, sitemap, favicon
components/
  QuoteFormCard.tsx      Shared multi-step quote form (used by hero + contact section)
  sections/              Page sections (Hero, Services, Gallery, BeforeAfter, etc.)
  icons.tsx              SVG icon set
  anim.tsx               Reveal / Stagger animation primitives
lib/site.ts              SINGLE SOURCE OF TRUTH: brand, services, testimonials, FAQ, etc.
public/images/           Optimized WebP photos
public/videos/           hero-2.mp4 (compressed hero background video)
scripts/optimize-images.mjs   Resize + convert source images to WebP
```

## Customize

| What | Where |
|------|-------|
| **Business name, phone, email, hours, service area, address** | [`lib/site.ts`](lib/site.ts) → `business` |
| **Services, features, steps, testimonials, FAQ, service areas, stats** | [`lib/site.ts`](lib/site.ts) |
| **Hero rotating headlines + taglines** | [`components/sections/Hero.tsx`](components/sections/Hero.tsx) → `ROTATIONS` |
| **Hero background video** | replace [`public/videos/hero-2.mp4`](public/videos) |
| **Photos** | replace files in [`public/images/`](public/images), keep the same `.webp` filenames |
| **Before/after pairs** | `public/images/ba-{living,bathroom,office}-{before,after}.webp` |
| **Brand colors** | [`tailwind.config.ts`](tailwind.config.ts) → `colors.brand` (terracotta) + `ink`/`night`/`cream`/`sand`, plus `--grad-brand` in [`app/globals.css`](app/globals.css) |
| **Fonts** | [`app/layout.tsx`](app/layout.tsx) (Plus Jakarta Sans for headings, Inter for body) |
| **Logo / favicon** | [`components/Logo.tsx`](components/Logo.tsx) and [`app/icon.svg`](app/icon.svg) |
| **Map marker + directions** | driven by `business.address` in [`lib/site.ts`](lib/site.ts) |

## Connect the quote form

The shared form in [`components/QuoteFormCard.tsx`](components/QuoteFormCard.tsx) is fully
functional on the front end and currently **simulates** submission (see the `submit` handler /
`setTimeout`). To receive real leads, replace the `setTimeout` with a `fetch` to your email
service, CRM, or a Next.js route handler (e.g. `app/api/quote/route.ts`).

## Media optimization

- **Images** are served as **AVIF/WebP** via `next/image` (responsive `srcset`, lazy-loading;
  the hero is prioritized). To re-optimize source photos, drop JPEGs in `public/images/` and run:
  ```bash
  node scripts/optimize-images.mjs
  ```
- **The hero video** was compressed with ffmpeg (22 MB → 1.7 MB). To re-compress a new clip:
  ```bash
  ffmpeg -i input.mp4 -an -vf "scale='if(gte(iw,ih),min(1280,iw),-2)':'if(gte(iw,ih),-2,min(1280,ih))'" \
    -c:v libx264 -crf 31 -preset veryfast -movflags +faststart -pix_fmt yuv420p public/videos/hero-2.mp4
  ```

## Deploy

This is a Next.js app, so it needs a host that runs Next (not static GitHub Pages). The easiest
path is **[Vercel](https://vercel.com)**: import the GitHub repo, it auto-detects Next.js, and
every push redeploys. Netlify works too.

## Notes

- `skyline-gta.webp` was cropped from the supplied skyline image to remove baked-in text.
- The original full-resolution source photos live in the top-level `images/` folder (gitignored,
  not used by the site); only `public/images/` is served.
