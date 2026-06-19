/**
 * One-off image optimizer: resize the oversized source JPEGs to sensible
 * dimensions and convert them to WebP. Run with: node scripts/optimize-images.mjs
 *
 * Next.js still re-encodes these to AVIF/WebP per device width at request time;
 * this just makes the *sources* small and fast so optimization is near-instant
 * and the delivered payloads are tiny.
 */
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join } from "node:path";

const dir = "public/images";

// Max width per image based on where it's actually displayed.
function maxWidth(name) {
  if (/^(hero|cta-bg|skyline)/.test(name)) return 1920; // full-bleed
  if (/^(testimonial|founder)/.test(name)) return 512; // small avatars
  return 1600; // cards, sliders, gallery
}

const files = (await readdir(dir)).filter((f) => f.endsWith(".jpg"));
let totalIn = 0;
let totalOut = 0;

for (const f of files) {
  const inPath = join(dir, f);
  const outPath = join(dir, f.replace(/\.jpg$/, ".webp"));
  const inSize = (await stat(inPath)).size;

  const img = sharp(inPath);
  const meta = await img.metadata();
  await img
    .resize({ width: Math.min(maxWidth(f), meta.width || 99999), withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(outPath);

  const outSize = (await stat(outPath)).size;
  totalIn += inSize;
  totalOut += outSize;
  console.log(
    `${f.padEnd(34)} ${(inSize / 1024).toFixed(0).padStart(5)}KB -> ${(outSize / 1024)
      .toFixed(0)
      .padStart(4)}KB webp`
  );

  // remove the heavy original
  await unlink(inPath);
}

console.log(
  `\nTOTAL  ${(totalIn / 1024 / 1024).toFixed(1)}MB -> ${(totalOut / 1024 / 1024).toFixed(2)}MB  ` +
    `(${(100 - (totalOut / totalIn) * 100).toFixed(1)}% smaller)`
);
