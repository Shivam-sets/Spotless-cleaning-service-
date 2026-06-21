import { features } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../anim";
import { featureIcon } from "../icons";

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              The details others miss are the ones <span className="text-gradient">we obsess over</span>
            </>
          }
          intro="Our whole service is built to feel effortless for you and exacting for us, backed by guarantees most cleaning companies won't put in writing."
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = featureIcon[f.icon];
            return (
              <StaggerItem key={f.title} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft sm:rounded-3xl sm:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl">
                    {Icon ? <Icon className="h-5 w-5 sm:h-6 sm:w-6" /> : null}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink sm:mt-5 sm:text-lg">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body sm:mt-2 sm:text-[0.95rem]">{f.copy}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
