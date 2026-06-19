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

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = featureIcon[f.icon];
            return (
              <StaggerItem key={f.title} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grad-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{f.copy}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
