import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Stroke icons, consistent 24×24 grid, 1.6 stroke, currentColor (Lucide-style). */
const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.6 4.8L18 9.4l-4.4 1.6L12 16l-1.6-5L6 9.4l4.4-1.6L12 3z" />
    <path d="M18.5 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
  </svg>
);

export const LeafIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14-1.5 0-2-.5-2-2z" />
    <path d="M9 15c2.5-2.5 5-4 8-5" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    <path d="M8.5 14.5l2 2 3.5-3.5" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.5-3 2.8-4.6 5.5-4.6S14 16 14.5 19" />
    <path d="M16 5.2A3 3 0 0 1 16 11M16.5 14.6c2.2.3 3.7 1.8 4 4.4" />
  </svg>
);

export const PriceIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12.8V5a1 1 0 0 1 1-1h7.8a2 2 0 0 1 1.4.6l5.2 5.2a2 2 0 0 1 0 2.8l-6.8 6.8a2 2 0 0 1-2.8 0L4.6 14.2A2 2 0 0 1 4 12.8z" />
    <circle cx="9" cy="9" r="1.3" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3.5l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6V20a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="M4.5 7l7.5 5.5L19.5 7" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M9.5 6C6.5 7.3 5 9.7 5 13.2V18h5.2v-5H7.8c0-2 .9-3.4 2.7-4.2L9.5 6zm9 0c-3 1.3-4.5 3.7-4.5 7.2V18H19v-5h-2.4c0-2 .9-3.4 2.7-4.2L18.5 6z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 11l8-6.5L20 11" />
    <path d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
    <path d="M9 7.5h1.5M13.5 7.5H15M9 11h1.5M13.5 11H15M9 14.5h1.5M13.5 14.5H15M10 20.5v-3h4v3" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 8.5h2V5.5h-2.3C11.7 5.5 10.5 7 10.5 9v1.5H8.5V13.5h2V20h3v-6.5h2.2l.5-3H13.5V9c0-.3.2-.5.5-.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: 1.4 })}>
    <path d="M20 12.2c0-.6 0-1.1-.1-1.7H12v3.3h4.5a3.9 3.9 0 0 1-1.7 2.5v2.1h2.7c1.6-1.5 2.5-3.7 2.5-6.2z" />
    <path d="M12 20.5c2.3 0 4.2-.8 5.5-2.1l-2.7-2.1c-.8.5-1.7.8-2.8.8-2.2 0-4-1.5-4.7-3.5H4.5v2.2A8.5 8.5 0 0 0 12 20.5z" />
    <path d="M7.3 13.5a5.1 5.1 0 0 1 0-3.1V8.2H4.5a8.5 8.5 0 0 0 0 7.6l2.8-2.3z" />
    <path d="M12 6.9c1.2 0 2.3.4 3.2 1.3l2.4-2.4A8.5 8.5 0 0 0 4.5 8.2l2.8 2.2C8 8.4 9.8 6.9 12 6.9z" />
  </svg>
);

export const featureIcon: Record<string, (p: IconProps) => JSX.Element> = {
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  leaf: LeafIcon,
  calendar: CalendarIcon,
  users: UsersIcon,
  price: PriceIcon,
};
