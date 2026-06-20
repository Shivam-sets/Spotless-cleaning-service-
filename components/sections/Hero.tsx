"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/site";
import { EASE } from "../anim";
import { StarIcon, ShieldIcon } from "../icons";
import { QuoteFormCard } from "../QuoteFormCard";

/** Rotating headline second line + tagline (cycles on a loop). */
const ROTATIONS = [
  { a: "We give you", h: "peace", b: "of mind.", tagline: "Feel good about your clean home again." },
  { a: "We give you", h: "time", b: "back.", tagline: "Done once. Done right. Every time." },
  { a: "We hand you a", h: "spotless", b: "home.", tagline: "Book in 60 seconds, relax for the rest." },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % ROTATIONS.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);

  const cur = ROTATIONS[i];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden bg-night">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero-2.mp4" type="video/mp4" />
      </video>
      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-night/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/65 to-night/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/30" />

      <div className="container relative flex min-h-[100svh] items-center pb-14 pt-28 lg:pt-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — rotating headline, tagline, rating */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
            >
              <ShieldIcon className="h-4 w-4 text-brand-300" />
              Quality guaranteed · Toronto locals
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[2.1rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]"
            >
              More than cleaning.
              <span className="mt-1 block min-h-[1.18em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="inline"
                  >
                    {cur.a}{" "}
                    <span className="relative inline-block whitespace-nowrap">
                      <motion.span
                        aria-hidden
                        className="absolute inset-x-0 bottom-[0.1em] top-[0.12em] -z-0 rounded-lg bg-brand-500"
                        initial={{ scaleX: reduce ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
                        style={{ originX: 0 }}
                      />
                      <span className="relative z-10 px-2 text-white">{cur.h}</span>
                    </span>{" "}
                    {cur.b}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <div className="mt-4 min-h-[1.75rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="text-base text-white/80 sm:text-lg"
                >
                  {cur.tagline}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* rating */}
            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {["/images/testimonial-1.webp", "/images/testimonial-2.webp", "/images/testimonial-3.webp"].map(
                  (src) => (
                    <span key={src} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-night">
                      <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1 text-brand-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">Loved by Toronto homeowners</p>
                <p className="text-xs text-white/65">12,000+ cleans · {business.rating}★ average</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — shared multi-step quote form */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="w-full lg:max-w-md lg:justify-self-end"
          >
            <QuoteFormCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
