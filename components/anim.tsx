"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { type ReactNode } from "react";

// Soft, premium easing curve used across the site.
export const EASE = [0.22, 0.61, 0.31, 1] as const;

const viewport = { once: true, margin: "-12% 0px -10% 0px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
} & Omit<HTMLMotionProps<"div">, "ref">;

/** Fades + lifts its child into view once on scroll. Honors reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.7,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : duration, delay, ease: EASE },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
} & Omit<HTMLMotionProps<"div">, "ref">;

/** Parent that reveals children one-by-one. Pair with <StaggerItem>. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.1,
  ...rest
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 22,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "ref">) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}
