import Image from "next/image";
import { gallery } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../anim";

export function Gallery() {
  return (
    <section id="work" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Results that speak <span className="text-gradient">for themselves</span>
            </>
          }
          intro="A look at the spaces we leave behind, bright, fresh and finished to a standard you can feel the moment you walk in."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4" gap={0.12}>
          {gallery.map((g, i) => (
            <StaggerItem
              key={g.src}
              className={i % 2 === 1 ? "lg:mt-10" : ""}
            >
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 right-4 translate-y-1 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.label}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
