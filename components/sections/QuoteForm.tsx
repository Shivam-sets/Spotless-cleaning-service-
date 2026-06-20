import Image from "next/image";
import { business } from "@/lib/site";
import { SparkleIcon, CheckIcon, PhoneIcon, ClockIcon } from "../icons";
import { QuoteFormCard } from "../QuoteFormCard";

export function QuoteForm() {
  return (
    <section id="quote" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <Image
        src="/images/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-night/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-night/90" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: pitch */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md">
            <SparkleIcon className="h-4 w-4 text-brand-300" />
            Free quote · No obligation
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Your free quote is
            <br className="hidden sm:block" /> 60 seconds away
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
            Tell us a little about your space and we&apos;ll send a flat-rate price, no
            walkthroughs, no pressure, no hidden fees.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Response within 1 business hour",
              "Transparent, flat-rate pricing",
              "100% satisfaction guarantee",
            ].map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/90">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
            <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-white hover:text-brand-300">
              <PhoneIcon className="h-5 w-5 text-brand-300" />
              {business.phoneDisplay}
            </a>
            <span className="flex items-center gap-2 text-sm text-white/70">
              <ClockIcon className="h-4 w-4 text-brand-300" />
              {business.hours}
            </span>
          </div>
        </div>

        {/* Right: shared multi-step form */}
        <QuoteFormCard />
      </div>
    </section>
  );
}
