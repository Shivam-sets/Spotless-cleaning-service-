import { steps } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../anim";
import { ArrowRightIcon } from "../icons";

export function Process() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A sparkling home in <span className="text-gradient">three easy steps</span>
            </>
          }
          intro="No walkthroughs, no haggling, no surprises. From quote to clean, the whole thing takes minutes of your time."
        />

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          <Stagger className="grid gap-10 lg:grid-cols-3 lg:gap-8" gap={0.15}>
            {steps.map((s) => (
              <StaggerItem key={s.no} className="relative text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border border-line bg-white font-display text-2xl font-semibold text-brand-700 shadow-soft">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[0.95rem] leading-relaxed text-body lg:mx-0">
                  {s.copy}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#quote" className="btn-primary text-base">
            Start your free quote
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
