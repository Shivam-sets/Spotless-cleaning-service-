"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/site";
import { EASE } from "../anim";
import { StarIcon, ArrowRightIcon, ShieldIcon, SparkleIcon } from "../icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background photograph */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduce ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE }}
      >
        <Image
          src="/images/hero.webp"
          alt="A professional cleaner polishing a kitchen island in a sunlit Toronto condo with the skyline behind"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
      </motion.div>

      {/* Scrims for legible white text on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/25" />

      <div className="container relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              <SparkleIcon className="h-4 w-4 text-brand-300" />
              {business.area}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            A spotless space,
            <br />
            <span className="text-gradient-warm">without lifting a finger.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            Premium home &amp; office cleaning across Toronto. Insured, vetted teams,
            eco-friendly products, and a 100% satisfaction guarantee, book your free
            quote in under a minute.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#quote" className="btn-primary text-base">
              Get a free quote
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="btn border border-white/30 bg-white/10 px-7 py-3.5 text-base text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Explore services
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["/images/testimonial-1.webp", "/images/testimonial-2.webp", "/images/testimonial-3.webp"].map(
                  (src, i) => (
                    <motion.span
                      key={src}
                      initial={{ scale: reduce ? 1 : 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 13, delay: 0.9 + i * 0.13 }}
                      whileHover={
                        reduce
                          ? undefined
                          : { scale: 1.25, y: -5, zIndex: 20, transition: { type: "spring", stiffness: 400, damping: 11 } }
                      }
                      className="relative h-9 w-9 cursor-pointer overflow-hidden rounded-full ring-2 ring-white/80 shadow-soft"
                    >
                      <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                    </motion.span>
                  )
                )}
              </div>
              <div className="text-sm text-white/85">
                <div className="flex items-center gap-1 text-brand-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <span>
                  <strong className="font-semibold text-white">{business.rating}</strong> from{" "}
                  {business.reviewCount}+ reviews
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-white/85">
              <ShieldIcon className="h-5 w-5 text-brand-300" />
              Insured, bonded &amp; background-checked
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
