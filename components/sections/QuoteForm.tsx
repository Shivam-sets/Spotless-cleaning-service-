"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/site";
import {
  HomeIcon,
  BuildingIcon,
  SparkleIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  StarIcon,
} from "../icons";

const serviceOptions = [
  { value: "Home cleaning", Icon: HomeIcon },
  { value: "Office / commercial", Icon: BuildingIcon },
  { value: "Deep clean", Icon: SparkleIcon },
  { value: "Move-in / move-out", Icon: HomeIcon },
  { value: "Post-construction", Icon: BuildingIcon },
];

const frequencyOptions = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const sizeOptions = ["Studio", "1", "2", "3", "4", "5+"];
const bathOptions = ["1", "2", "3", "4+"];

const steps = ["Service", "Details", "Contact"];

type FormData = {
  service: string;
  frequency: string;
  bedrooms: string;
  bathrooms: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
};

const empty: FormData = {
  service: "",
  frequency: "",
  bedrooms: "",
  bathrooms: "",
  name: "",
  email: "",
  phone: "",
  date: "",
  notes: "",
};

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition-colors placeholder:text-muted/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 aria-[invalid=true]:border-red-400 aria-[invalid=true]:focus:ring-red-100";

export function QuoteForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (s: number) => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 0 && !data.service) e.service = "Please choose a service.";
    if (s === 1) {
      if (!data.frequency) e.frequency = "Pick a frequency.";
      if (!data.bedrooms) e.bedrooms = "Select a size.";
      if (!data.bathrooms) e.bathrooms = "Select bathrooms.";
    }
    if (s === 2) {
      if (!data.name.trim()) e.name = "Your name is required.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email.";
      if (data.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a valid phone number.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate(step)) return;
    setDir(1);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate(2)) return;
    setStatus("loading");
    // Front-end demo: wire this to your email service / CRM endpoint.
    setTimeout(() => setStatus("success"), 1200);
  };

  const slide = {
    enter: (d: number) => ({ opacity: 0, x: reduce ? 0 : d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: reduce ? 0 : d * -40 }),
  };

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

        {/* Right: form card */}
        <div className="rounded-[1.75rem] border border-white/10 bg-white p-6 shadow-lift sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6 text-center"
              >
                <motion.span
                  initial={{ scale: reduce ? 1 : 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-grad-brand text-white shadow-glow"
                >
                  <CheckIcon className="h-8 w-8" />
                </motion.span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  Thanks, {data.name.split(" ")[0] || "there"}!
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-body">
                  Your request is in. A {business.name} specialist will email{" "}
                  <span className="font-medium text-ink">{data.email}</span> with your flat-rate
                  quote within one business hour.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setData(empty);
                    setStep(0);
                    setStatus("idle");
                  }}
                  className="btn-ghost mt-6 cursor-pointer"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    {steps.map((label, i) => (
                      <div key={label} className="flex items-center gap-2">
                        <span
                          className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold transition-colors ${
                            i <= step ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                          }`}
                        >
                          {i < step ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
                        </span>
                        <span
                          className={`hidden text-sm font-medium sm:inline ${
                            i <= step ? "text-ink" : "text-muted"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-50">
                    <motion.div
                      className="h-full rounded-full bg-grad-brand"
                      initial={false}
                      animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.31, 1] }}
                    />
                  </div>
                </div>

                <form onSubmit={submit} noValidate>
                  <AnimatePresence mode="wait" custom={dir} initial={false}>
                    <motion.div
                      key={step}
                      custom={dir}
                      variants={slide}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.31, 1] }}
                    >
                      {step === 0 && (
                        <fieldset>
                          <legend className="font-display text-lg font-semibold text-ink">
                            What can we clean for you?
                          </legend>
                          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {serviceOptions.map(({ value, Icon }) => {
                              const active = data.service === value;
                              return (
                                <button
                                  key={value}
                                  type="button"
                                  onClick={() => set("service", value)}
                                  aria-pressed={active}
                                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-left text-sm font-medium transition-all ${
                                    active
                                      ? "border-brand-500 bg-brand-50 text-ink ring-2 ring-brand-200"
                                      : "border-line bg-white text-body hover:border-brand-300 hover:bg-brand-50/40"
                                  }`}
                                >
                                  <span
                                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                                      active ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                                    }`}
                                  >
                                    <Icon className="h-5 w-5" />
                                  </span>
                                  {value}
                                </button>
                              );
                            })}
                          </div>
                          {errors.service && (
                            <p className="mt-2 text-sm text-red-500">{errors.service}</p>
                          )}
                        </fieldset>
                      )}

                      {step === 1 && (
                        <div className="space-y-5">
                          <fieldset>
                            <legend className="text-sm font-semibold text-ink">How often?</legend>
                            <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                              {frequencyOptions.map((f) => {
                                const active = data.frequency === f;
                                return (
                                  <button
                                    key={f}
                                    type="button"
                                    onClick={() => set("frequency", f)}
                                    aria-pressed={active}
                                    className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl border px-2 text-sm font-medium transition-all ${
                                      active
                                        ? "border-brand-500 bg-brand-50 text-ink ring-2 ring-brand-200"
                                        : "border-line text-body hover:border-brand-300"
                                    }`}
                                  >
                                    {f}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.frequency && (
                              <p className="mt-2 text-sm text-red-500">{errors.frequency}</p>
                            )}
                          </fieldset>

                          <div>
                            <label htmlFor="bedrooms" className="text-sm font-semibold text-ink">
                              Bedrooms
                            </label>
                            <div className="mt-2.5 grid grid-cols-3 gap-2 sm:grid-cols-6" id="bedrooms">
                              {sizeOptions.map((b) => {
                                const active = data.bedrooms === b;
                                return (
                                  <button
                                    key={b}
                                    type="button"
                                    onClick={() => set("bedrooms", b)}
                                    aria-pressed={active}
                                    className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-all ${
                                      active
                                        ? "border-brand-500 bg-brand-50 text-ink ring-2 ring-brand-200"
                                        : "border-line text-body hover:border-brand-300"
                                    }`}
                                  >
                                    {b}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.bedrooms && (
                              <p className="mt-2 text-sm text-red-500">{errors.bedrooms}</p>
                            )}
                          </div>

                          <div>
                            <label className="text-sm font-semibold text-ink">Bathrooms</label>
                            <div className="mt-2.5 grid grid-cols-4 gap-2">
                              {bathOptions.map((b) => {
                                const active = data.bathrooms === b;
                                return (
                                  <button
                                    key={b}
                                    type="button"
                                    onClick={() => set("bathrooms", b)}
                                    aria-pressed={active}
                                    className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-all ${
                                      active
                                        ? "border-brand-500 bg-brand-50 text-ink ring-2 ring-brand-200"
                                        : "border-line text-body hover:border-brand-300"
                                    }`}
                                  >
                                    {b}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.bathrooms && (
                              <p className="mt-2 text-sm text-red-500">{errors.bathrooms}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="text-sm font-semibold text-ink">
                              Full name
                            </label>
                            <input
                              id="name"
                              type="text"
                              autoComplete="name"
                              value={data.name}
                              onChange={(e) => set("name", e.target.value)}
                              aria-invalid={!!errors.name}
                              className={`mt-1.5 ${inputClass}`}
                              placeholder="Jordan Lee"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="email" className="text-sm font-semibold text-ink">
                                Email
                              </label>
                              <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => set("email", e.target.value)}
                                aria-invalid={!!errors.email}
                                className={`mt-1.5 ${inputClass}`}
                                placeholder="you@email.com"
                              />
                              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                              <label htmlFor="phone" className="text-sm font-semibold text-ink">
                                Phone
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                value={data.phone}
                                onChange={(e) => set("phone", e.target.value)}
                                aria-invalid={!!errors.phone}
                                className={`mt-1.5 ${inputClass}`}
                                placeholder="(416) 555-0123"
                              />
                              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                            </div>
                          </div>
                          <div>
                            <label htmlFor="date" className="text-sm font-semibold text-ink">
                              Preferred date <span className="font-normal text-muted">(optional)</span>
                            </label>
                            <input
                              id="date"
                              type="date"
                              value={data.date}
                              onChange={(e) => set("date", e.target.value)}
                              className={`mt-1.5 ${inputClass}`}
                            />
                          </div>
                          <div>
                            <label htmlFor="notes" className="text-sm font-semibold text-ink">
                              Anything else? <span className="font-normal text-muted">(optional)</span>
                            </label>
                            <textarea
                              id="notes"
                              rows={3}
                              value={data.notes}
                              onChange={(e) => set("notes", e.target.value)}
                              className={`mt-1.5 resize-none ${inputClass}`}
                              placeholder="Pets, parking, access details, focus areas…"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* nav buttons */}
                  <div className="mt-7 flex items-center gap-3">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={back}
                        className="cursor-pointer rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream"
                      >
                        Back
                      </button>
                    )}
                    {step < steps.length - 1 ? (
                      <button type="button" onClick={next} className="btn-primary flex-1 cursor-pointer">
                        Continue
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary flex-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Get my free quote
                            <SparkleIcon className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
                    <StarIcon className="h-3.5 w-3.5 text-brand-400" />
                    Rated {business.rating}/5 by {business.reviewCount}+ Toronto clients
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
