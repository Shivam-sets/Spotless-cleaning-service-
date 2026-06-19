"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs, business } from "@/lib/site";
import { Reveal } from "../anim";
import { PlusIcon, PhoneIcon } from "../icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-500" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help, give us a
            call any time during business hours.
          </p>
          <a
            href={business.phoneHref}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800"
          >
            <PhoneIcon className="h-5 w-5" />
            {business.phoneDisplay}
          </a>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-cream">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                    >
                      <span className="font-display text-lg font-medium text-ink">{f.q}</span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-white text-brand-600 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.31, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 leading-relaxed text-body sm:px-7">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
