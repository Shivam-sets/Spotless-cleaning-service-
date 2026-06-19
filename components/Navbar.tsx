"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { nav, business } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night/55 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <nav
        className={`container flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "border border-line/80 bg-white/85 px-4 py-2.5 shadow-soft backdrop-blur-xl sm:px-5"
            : "border border-transparent bg-transparent px-4 py-3 sm:px-5"
        }`}
      >
        <a href="#" aria-label={`${business.name} home`} className="shrink-0">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-body hover:bg-brand-50 hover:text-ink"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={business.phoneHref}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors md:inline-flex ${
              scrolled ? "text-ink hover:text-brand-700" : "text-white hover:text-white"
            }`}
          >
            <PhoneIcon className={`h-4 w-4 ${scrolled ? "text-brand-600" : "text-brand-300"}`} />
            {business.phoneDisplay}
          </a>
          <a href="#quote" className="btn-primary hidden text-sm sm:inline-flex">
            Get a free quote
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full border transition-colors lg:hidden ${
              scrolled
                ? "border-line bg-white text-ink hover:bg-brand-50"
                : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-3 top-3 origin-top rounded-3xl border border-line bg-cream p-5 shadow-lift"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.31, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink hover:bg-brand-50"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-5 flex flex-col">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line/70 py-3.5 font-display text-xl text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="btn-primary mt-5 w-full"
              >
                Get a free quote
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={business.phoneHref}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white py-3.5 font-semibold text-ink"
              >
                <PhoneIcon className="h-4 w-4 text-brand-600" />
                {business.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
