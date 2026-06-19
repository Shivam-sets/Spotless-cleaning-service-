import Image from "next/image";
import { business } from "@/lib/site";
import { Reveal } from "../anim";
import { CheckIcon, StarIcon } from "../icons";

const highlights = [
  "Locally owned & operated in Toronto",
  "Background-checked, trained staff",
  "Eco-friendly, non-toxic products",
  "Fully insured & bonded",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/about-team.webp"
              alt={`The ${business.name} cleaning team in a bright Toronto home`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* floating rating card */}
          <div className="absolute -bottom-6 -right-3 w-max rounded-2xl border border-line bg-white/95 p-4 shadow-lift backdrop-blur-sm sm:-right-6">
            <div className="flex items-center gap-1 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-1.5 text-sm font-semibold text-ink">
              {business.rating}/5 · {business.reviewCount}+ reviews
            </p>
            <p className="text-xs text-muted">Rated across Google &amp; Facebook</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-500" />
            About {business.name}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            A local team that treats your space like our own
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Since {business.established}, we&apos;ve helped thousands of Toronto families and
            businesses reclaim their time with cleaning they never have to think about. No
            rotating strangers, no cut corners, just a dedicated crew who take genuine pride
            in the work.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Every clean is backed by our 100% satisfaction guarantee. If something isn&apos;t
            right, we make it right, fast.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-[0.95rem] text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/founder.webp" alt="Company founder" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-ink">Sarah Mitchell</p>
              <p className="text-sm text-muted">Founder &amp; Lead, {business.name}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
