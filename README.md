# Northshine — Toronto Cleaning Service Website

A premium, fully responsive marketing site for a Toronto cleaning company, built with
**Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**. Elegant scroll
animations, a multi-step quote form, and image-optimized, accessible, SEO-ready pages.

> **Branding is a placeholder.** "Northshine", the phone number, and email are stand-ins.
> Swap them in one place — see **Customize** below.

## Run it

```bash
npm install      # already done
npm run dev      # development server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> On this machine Node lives at `C:\Program Files\nodejs`. If `node`/`npm` aren't found in a
> new terminal, open a fresh PowerShell (the installer added it to PATH) or prepend
> `"C:\Program Files\nodejs;"` to `$env:Path`. `serve-preview.cmd` is just a helper for the
> in-app preview panel and isn't needed to run the site normally.

## Customize

| What | Where |
|------|-------|
| **Business name, phone, email, hours, service area** | [`lib/site.ts`](lib/site.ts) → `business` |
| **Services, features, steps, testimonials, FAQ, areas** | [`lib/site.ts`](lib/site.ts) |
| **Photos** | Replace files in [`public/images/`](public/images) (keep the same filenames) |
| **Brand colors** | [`tailwind.config.ts`](tailwind.config.ts) → `colors.brand` (teal scale) + `ink`/`night` |
| **Fonts** | [`app/layout.tsx`](app/layout.tsx) (currently Fraunces + Inter) |
| **Logo** | [`components/Logo.tsx`](components/Logo.tsx) and [`app/icon.svg`](app/icon.svg) (favicon) |
| **Founder name/photo** | [`components/sections/About.tsx`](components/sections/About.tsx) + `public/images/founder.jpg` |

## Connect the quote form

The quote form in [`components/sections/QuoteForm.tsx`](components/sections/QuoteForm.tsx) is
fully functional on the front end and currently **simulates** submission (see the `submit`
handler / `setTimeout`). To receive real leads, POST the `data` object to your email service,
CRM, or a Next.js route handler (e.g. `app/api/quote/route.ts`) — replace the `setTimeout` with
a `fetch` call.

## Notes

- All imagery is optimized through `next/image` (AVIF/WebP, responsive `srcset`, lazy-loading);
  the hero is prioritized for fast LCP.
- Animations respect `prefers-reduced-motion`.
- `skyline-gta.jpg` was cropped from the supplied skyline image to remove baked-in text.
- The original supplied images remain in the top-level `images/` folder for reference; only
  `public/images/` is used by the site.
