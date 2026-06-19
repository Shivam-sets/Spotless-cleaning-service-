import { stats } from "@/lib/site";
import { Stagger, StaggerItem } from "../anim";
import { CountUp } from "../CountUp";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-night py-16 lg:py-20">
      {/* soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
      />
      <div className="container relative">
        <Stagger className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
                <CountUp
                  to={s.value}
                  decimals={(s as { decimals?: number }).decimals ?? 0}
                  suffix={s.suffix}
                />
              </div>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
