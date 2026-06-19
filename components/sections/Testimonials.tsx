import Image from "next/image";
import { testimonials, business } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../anim";
import { StarIcon, QuoteIcon } from "../icons";

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-sand py-20 lg:py-28">
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

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" gap={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft">
                <QuoteIcon className="h-9 w-9 text-brand-200" />
                <div className="mt-3 flex items-center gap-1 text-brand-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 grow text-[1.02rem] leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.name} fill sizes="48px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
