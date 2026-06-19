"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../anim";
import { CheckIcon } from "../icons";

const scenes = [
  {
    label: "Living room",
    before: "/images/ba-living-before.webp",
    after: "/images/ba-living-after.webp",
  },
  {
    label: "Bathroom",
    before: "/images/ba-bathroom-before.webp",
    after: "/images/ba-bathroom-after.webp",
  },
  {
    label: "Office",
    before: "/images/ba-office-before.webp",
    after: "/images/ba-office-after.webp",
  },
];

export function BeforeAfter() {
  const [scene, setScene] = useState(0);
  const [pos, setPos] = useState(55);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore, capture isn't essential */
    }
    setFromX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromX(e.clientX);
  };
  const stop = () => {
    dragging.current = false;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  const s = scenes[scene];

  return (
    <section id="before-after" className="scroll-mt-24 bg-sand py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Before & after"
          title={
            <>
              See the <span className="text-gradient">difference</span> for yourself
            </>
          }
          intro="Drag the slider to reveal the transformation, the same space, deep-cleaned to a spotless shine."
        />

        <Reveal className="mx-auto mt-12 max-w-4xl">
          {/* scene switcher */}
          <div className="mb-5 flex flex-wrap justify-center gap-2.5">
            {scenes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setScene(i)}
                aria-pressed={i === scene}
                className={`min-h-[44px] cursor-pointer rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                  i === scene
                    ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                    : "border-line bg-white text-ink hover:border-brand-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stop}
            onPointerLeave={stop}
            className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-[1.75rem] shadow-lift sm:aspect-[16/10]"
          >
            {/* AFTER (clean), base layer */}
            <Image
              key={s.after}
              src={s.after}
              alt={`${s.label} after cleaning, spotless`}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              draggable={false}
              className="pointer-events-none select-none object-cover"
            />
            <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-soft">
              <CheckIcon className="h-3.5 w-3.5" />
              After
            </span>

            {/* BEFORE (dimmed/grimy), clipped to the left of the handle */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                key={s.before}
                src={s.before}
                alt={`${s.label} before cleaning`}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                draggable={false}
                className="pointer-events-none select-none object-cover"
              />
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Before
              </span>
            </div>

            {/* handle */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.3)]" />
              <button
                type="button"
                role="slider"
                aria-label="Reveal before and after"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                onKeyDown={onKeyDown}
                className="pointer-events-auto absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-ink shadow-lift ring-1 ring-black/5 focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 7l-4 5 4 5M15 7l4 5-4 5" />
                </svg>
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-muted">
            Drag the handle, or use the arrow keys, to compare.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
