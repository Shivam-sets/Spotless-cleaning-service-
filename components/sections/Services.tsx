import Image from "next/image";
import { services } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../anim";
import { CheckIcon, ArrowRightIcon } from "../icons";

const badgeStyles: Record<string, string> = {
  Residential: "bg-brand-600 text-white",
  Commercial: "bg-ink text-white",
  Both: "bg-white/90 text-ink",
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Cleaning for every space, <span className="text-gradient">done right</span>
            </>
          }
          intro="From weekly home upkeep to after-hours office contracts, every service follows our 50-point checklist and 100% satisfaction guarantee."
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs ${badgeStyles[s.audience]}`}
                  >
                    {s.audience}
                  </span>
                </div>

                <div className="flex grow flex-col p-4 sm:p-6">
                  <h3 className="font-display text-base font-semibold text-ink sm:text-xl">{s.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-body sm:mt-2 sm:line-clamp-none sm:text-[0.95rem]">
                    {s.blurb}
                  </p>

                  <ul className="mt-4 hidden space-y-2 sm:block">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className="mt-5 hidden items-center gap-1.5 self-start text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 sm:mt-6 sm:inline-flex"
                  >
                    Get a quote
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
