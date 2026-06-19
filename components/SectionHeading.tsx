import { type ReactNode } from "react";
import { Reveal } from "./anim";
import { SparkleIcon } from "./icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span
        className={`eyebrow ${isCenter ? "justify-center" : ""} ${
          light ? "text-brand-300" : ""
        }`}
      >
        <SparkleIcon className="h-4 w-4" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-body"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
