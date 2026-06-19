import { Reveal } from "../anim";
import { ShieldIcon, LeafIcon, ClockIcon, StarIcon, SparkleIcon } from "../icons";

const items = [
  { Icon: ShieldIcon, label: "Insured & bonded" },
  { Icon: LeafIcon, label: "Eco-friendly products" },
  { Icon: ClockIcon, label: "On-time, every time" },
  { Icon: SparkleIcon, label: "50-point checklist" },
  { Icon: StarIcon, label: "4.9★ rated on Google" },
];

export function TrustBar() {
  return (
    <section className="relative z-20 bg-cream">
      <div className="container -mt-10">
        <Reveal>
          <div className="card flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-3xl px-6 py-5 sm:gap-x-10 lg:justify-between lg:px-10">
            {items.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                <Icon className="h-5 w-5 text-brand-600" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
