"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { testimonials, business } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { StarIcon, QuoteIcon } from "../icons";

// Repeat the reviews so the track is wide enough to loop seamlessly.
const loopItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ paused: false, dragging: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = 0.5; // px per frame — slow, easy to read
    let raf = 0;

    const tick = () => {
      const s = state.current;
      const half = el.scrollWidth / 2;
      if (!s.dragging && half > 0) {
        if (!s.paused) el.scrollLeft += speed;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };

    if (!reduce) raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onEnter = () => {
    state.current.paused = true;
  };
  const onLeave = () => {
    state.current.paused = false;
    state.current.dragging = false;
  };
  const onDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    const s = state.current;
    s.dragging = true;
    s.paused = true;
    s.startX = e.clientX;
    s.startScroll = el.scrollLeft;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
  };
  const onMove = (e: React.PointerEvent) => {
    const s = state.current;
    const el = trackRef.current;
    if (!s.dragging || !el) return;
    const half = el.scrollWidth / 2;
    let next = s.startScroll - (e.clientX - s.startX);
    while (half > 0 && next >= half) {
      next -= half;
      s.startScroll -= half;
    }
    while (half > 0 && next < 0) {
      next += half;
      s.startScroll += half;
    }
    el.scrollLeft = next;
  };
  const onUp = () => {
    const s = state.current;
    s.dragging = false;
    s.paused = false;
  };

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden bg-sand py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              Loved by Toronto <span className="text-gradient">homes &amp; offices</span>
            </>
          }
          intro={
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </span>
              <span className="font-semibold text-ink">{business.rating}/5</span>
              from {business.reviewCount}+ verified reviews
            </span>
          }
        />
      </div>

      <div className="relative mt-12">
        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sand to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sand to-transparent sm:w-24"
        />

        <div
          ref={trackRef}
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          style={{ touchAction: "pan-y", scrollbarWidth: "none" }}
          className="no-scrollbar flex cursor-grab select-none gap-5 overflow-x-auto px-5 pb-2 active:cursor-grabbing sm:gap-6 sm:px-8"
        >
          {loopItems.map((t, i) => (
            <figure
              key={i}
              className="flex w-[280px] shrink-0 flex-col rounded-3xl border border-line bg-white p-6 shadow-soft sm:w-[360px] sm:p-7"
            >
              <QuoteIcon className="h-9 w-9 text-brand-200" />
              <div className="mt-3 flex items-center gap-1 text-brand-500">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <StarIcon key={k} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 grow text-[1.02rem] leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    draggable={false}
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-ink">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Hover to pause · click and drag to browse
        </p>
      </div>
    </section>
  );
}
