import Image from "next/image";
import { serviceAreas, business } from "@/lib/site";
import { Reveal } from "../anim";
import { MapPinIcon, ArrowRightIcon, ArrowUpRightIcon } from "../icons";

// Keyless Google Maps embed (no API key required). Swap to the Embed API if you have a key.
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  business.address
)}&z=13&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.address
)}`;

export function ServiceArea() {
  return (
    <section id="map" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/skyline-gta.webp"
        alt="Toronto skyline with the CN Tower"
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-night/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/75 to-night/55" />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: copy */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              <MapPinIcon className="h-4 w-4 text-brand-300" />
              Service area
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Proudly serving all of&nbsp;Toronto
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              From downtown condos to homes and offices across the city, our local crews cover
              every corner of Toronto. Not sure if we reach you? Just ask.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {serviceAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/85 backdrop-blur-sm"
                >
                  {a}
                </span>
              ))}
            </div>

            <a href="#quote" className="btn-primary mt-9 text-base">
              Check availability in your area
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </Reveal>

          {/* Right: map widget */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 shadow-lift">
              <iframe
                title={`${business.legalName} location on Google Maps`}
                src={mapSrc}
                className="block h-[290px] w-full border-0 bg-sand sm:h-[340px] lg:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-col items-start gap-3 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-display text-base font-semibold text-ink">
                    <MapPinIcon className="h-4 w-4 shrink-0 text-brand-600" />
                    {business.legalName}
                  </p>
                  <p className="mt-0.5 truncate text-sm text-muted">{business.address}</p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full shrink-0 justify-center px-5 py-3 text-sm sm:w-auto"
                >
                  Get directions
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
