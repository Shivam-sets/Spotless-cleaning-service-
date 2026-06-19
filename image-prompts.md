# Image Prompt Sheet — Toronto Cleaning Service Website

**How to use:** Generate each image at the listed aspect ratio / resolution, save it with the
**exact filename** shown, and drop them all into `public/images/`. I'll handle resizing,
optimization (WebP), responsive `srcset`, and lazy-loading so they stay fast on every device.

If a people-shot comes out with distorted hands/faces, just skip it — I have graceful fallbacks
(room-only shots + clean initials avatars). Room/interior shots are the highest priority.

---

## GLOBAL STYLE (paste this into EVERY prompt for a cohesive set)

> Photorealistic, ultra-detailed, 4K, professional commercial interior photography. Bright
> high-key natural daylight, airy and immaculate, modern Canadian interior. Crisp whites and
> warm neutral tones with subtle **soft teal / aqua and sky-blue** accents. Soft natural
> shadows, gentle reflections, shallow depth of field, shot on full-frame 35mm at f/2.8.
> Calm, fresh, premium feel. No text, no watermark, no logos, no on-screen UI.

**Staff/uniform consistency (any shot with people):** cleaning staff wear a clean modern
uniform — white or heather-grey tee with a **soft teal apron or polo accent**, optional nitrile
gloves; friendly, professional, diverse team.

**Negative (append to each):** text, watermark, logo, distorted hands, extra fingers, blurry,
low-resolution, oversaturated, HDR halos, harsh shadows, clutter, mess, dingy lighting.

---

## ESSENTIAL IMAGES

### 1. `hero.jpg`  — 21:9 ultrawide (≈3840×1646)
A sun-filled modern Toronto condo living room with floor-to-ceiling windows and a soft, blurred
city skyline beyond. A professional cleaner in teal-accented uniform calmly wipes a sleek white
kitchen island; surfaces gleam, light streams in, a few green plants and a neutral sofa.
**Composition leaves clean, uncluttered negative space across the left third** for a headline
overlay. Aspirational, serene, spotless. *(+ GLOBAL STYLE + Negative)*

### 2. `service-residential.jpg` — 4:3 (1600×1200)
Bright, tidy modern living room mid-clean in a cozy Toronto home; a gloved hand glides a
microfiber cloth across a wood coffee table, throw blanket on a linen sofa, soft daylight,
inviting and warm. *(+ GLOBAL STYLE + Negative)*

### 3. `service-commercial.jpg` — 4:3 (1600×1200)
Modern open-plan office with glass partitions and rows of clean desks; a uniformed cleaner
wipes a desk or pushes a tidy cleaning cart in soft early-morning light. Crisp, corporate,
spotless. *(+ GLOBAL STYLE + Negative)*

### 4. `service-deep.jpg` — 4:3 (1600×1200)
Macro detail of a spotless luxury bathroom: gleaming chrome faucet and white subway tile, fresh
water droplets, a gloved hand polishing the fixture to a shine. Crisp, sparkling, satisfying.
*(+ GLOBAL STYLE + Negative)*

### 5. `service-move.jpg` — 4:3 (1600×1200)
A bright, empty apartment with light hardwood floors, a few cardboard moving boxes by the wall,
and a cleaner mopping the gleaming floor as sunlight pours through bare windows. "Fresh start"
mood. *(+ GLOBAL STYLE + Negative)*

### 6. `gallery-kitchen.jpg` — 3:2 (1800×1200)
Magazine-quality "after" shot of a pristine modern kitchen, no people: white quartz counters,
matte cabinetry, gleaming sink, soft daylight, perfectly styled and immaculate.
*(+ GLOBAL STYLE + Negative)*

### 7. `gallery-bathroom.jpg` — 3:2 (1800×1200)
Pristine spa-like bathroom, no people: spotless glass shower, folded white towels, fresh
eucalyptus sprig, polished mirror and chrome, bright and airy. *(+ GLOBAL STYLE + Negative)*

### 8. `gallery-bedroom.jpg` — 3:2 (1800×1200)
Serene, immaculate modern bedroom, no people: crisp white linens, neatly arranged pillows,
soft morning light through sheer curtains, calm and hotel-grade clean.
*(+ GLOBAL STYLE + Negative)*

### 9. `gallery-living.jpg` — 3:2 (1800×1200)
Bright, perfectly tidy contemporary living room, no people: vacuum lines visible on a clean
area rug, plump cushions, plants, glowing daylight. *(+ GLOBAL STYLE + Negative)*

### 10. `about-team.jpg` — 3:2 (1800×1200)
Friendly, diverse cleaning team of 4–5 people in matching white/teal uniforms standing together
in a bright modern home or office, smiling naturally, some holding cleaning caddies. Confident,
approachable, trustworthy group portrait. *(+ GLOBAL STYLE + Negative)*

### 11. `cta-bg.jpg` — 16:9 (2400×1350)
A bright, softly out-of-focus clean modern interior (kitchen or living area) with airy daylight
— intentionally simple and slightly blurred so a headline and quote form can overlay cleanly.
*(+ GLOBAL STYLE + Negative)*

---

## NICE-TO-HAVE (adds polish; safe to skip)

### 12. `service-post-construction.jpg` — 4:3 (1600×1200)
Newly renovated, bright room with fine construction dust; a uniformed cleaner wipes a new window
frame, fresh drywall and modern fixtures around. Renovation cleanup context.
*(+ GLOBAL STYLE + Negative)*

### 13. `service-eco.jpg` — 4:3 (1600×1200)
Eco-friendly green cleaning products on a marble counter: refillable spray bottles, lemon,
eucalyptus and baking soda, soft natural light. Non-toxic, plant-based feel.
*(+ GLOBAL STYLE + Negative)*

### 14. `toronto-skyline.jpg` — 21:9 ultrawide (≈3000×1286)
Clean, crisp Toronto skyline with the CN Tower at soft golden hour, calm sky, slightly muted so
white text overlays well. Used in the "Proudly serving the GTA" band.
*(+ GLOBAL STYLE + Negative)*

### 15. `founder.jpg` — 4:5 portrait (1200×1500)
Warm, approachable portrait of the company founder/owner in a teal-accented uniform or smart
casual, bright softly-blurred neutral background, genuine smile. *(+ GLOBAL STYLE + Negative)*

### Testimonial avatars — 1:1 square (≈800×800), natural headshots, neutral soft backgrounds
- `testimonial-1.jpg` — friendly female Toronto homeowner, ~30s, natural smile.
- `testimonial-2.jpg` — male professional, ~40s, warm and confident.
- `testimonial-3.jpg` — female office/property manager, ~50s, approachable.
*(+ GLOBAL STYLE + Negative — keep faces natural, avoid distortion)*

---

## DELIVERY CHECKLIST
- Format: JPG (or PNG/WebP) — I'll convert/optimize.
- Color: sRGB.
- Keep the **exact filenames** above; place everything in `public/images/`.
- Priority order if generating in batches: **#1 hero → #6–9 gallery → #2–5 services → #10 team → #11 CTA → the rest.**
