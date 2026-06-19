/**
 * SINGLE SOURCE OF TRUTH for brand + content.
 * ───────────────────────────────────────────
 * Everything customer-facing lives here so the site can be re-branded by editing
 * one file. The brand below ("Northshine") is a tasteful PLACEHOLDER, swap the
 * `business` block for your real name, phone, email and service area.
 */

export const business = {
  name: "Spotless",
  legalName: "Spotless Cleaning",
  tagline: "Toronto's spotless standard.",
  phoneDisplay: "(416) 555-0142",
  phoneHref: "tel:+14165550142",
  email: "hello@spotless.ca",
  emailHref: "mailto:hello@spotless.ca",
  area: "Toronto",
  // PLACEHOLDER address, swap for the real business address (drives the map marker + directions).
  address: "330 Bay St, Toronto, ON M5H 2S8",
  hours: "Mon–Sat · 8:00am – 7:00pm",
  established: 2015,
  rating: 4.9,
  reviewCount: 870,
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://google.com",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Our work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Homes & offices cleaned" },
  { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
  { value: 9, suffix: " yrs", label: "Serving Toronto" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  audience: "Residential" | "Commercial" | "Both";
  points: string[];
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Cleaning",
    blurb:
      "Recurring or one-time cleans for condos, houses and apartments, the same trusted team every visit.",
    image: "/images/service-residential.webp",
    audience: "Residential",
    points: ["Weekly, bi-weekly or monthly", "Kitchens & bathrooms detailed", "Same crew each visit"],
  },
  {
    slug: "commercial",
    title: "Commercial & Office",
    blurb:
      "Spotless workspaces, retail and medical spaces, flexible schedules that work around your business hours.",
    image: "/images/service-commercial.webp",
    audience: "Commercial",
    points: ["After-hours scheduling", "Insured & bonded staff", "Custom service contracts"],
  },
  {
    slug: "deep",
    title: "Deep Cleaning",
    blurb:
      "A meticulous top-to-bottom reset, baseboards, grout, inside appliances and the spots routine cleans miss.",
    image: "/images/service-deep.webp",
    audience: "Both",
    points: ["Inside oven & fridge", "Grout & tile detailing", "Baseboards & vents"],
  },
  {
    slug: "move",
    title: "Move-In / Move-Out",
    blurb:
      "Hand back the keys sparkling. A thorough empty-home clean that protects your deposit and impresses buyers.",
    image: "/images/service-move.webp",
    audience: "Both",
    points: ["Cabinets in & out", "Wall & baseboard wipe", "Realtor & landlord ready"],
  },
  {
    slug: "post-construction",
    title: "Post-Construction",
    blurb:
      "Fine dust and renovation debris removed safely, leaving your new space photo-ready and dust-free.",
    image: "/images/service-post-construction.webp",
    audience: "Both",
    points: ["Fine dust removal", "Window & fixture detailing", "Debris & sticker removal"],
  },
  {
    slug: "eco",
    title: "Green & Eco Cleaning",
    blurb:
      "Plant-based, non-toxic products that are safe for kids, pets and allergies, without compromising on shine.",
    image: "/images/service-eco.webp",
    audience: "Both",
    points: ["Non-toxic products", "Kid & pet safe", "EPA-certified supplies"],
  },
];

export type Feature = { icon: string; title: string; copy: string };

export const features: Feature[] = [
  {
    icon: "shield",
    title: "Insured, bonded & vetted",
    copy: "Every cleaner is background-checked, fully insured and trained to our 50-point checklist.",
  },
  {
    icon: "sparkle",
    title: "100% satisfaction guarantee",
    copy: "Not thrilled? We'll re-clean the spot within 24 hours, completely free, no questions asked.",
  },
  {
    icon: "leaf",
    title: "Eco-friendly by default",
    copy: "Plant-based, non-toxic products that are safe for your family, pets and the planet.",
  },
  {
    icon: "calendar",
    title: "Flexible scheduling",
    copy: "Book online in 60 seconds. Reschedule anytime, no lock-in contracts, no hidden fees.",
  },
  {
    icon: "users",
    title: "Same trusted team",
    copy: "You'll see familiar faces every visit, people who learn exactly how you like things done.",
  },
  {
    icon: "price",
    title: "Upfront, flat pricing",
    copy: "Transparent quotes with no surprises. What we quote is what you pay, every single time.",
  },
];

export const steps = [
  {
    no: "01",
    title: "Request your quote",
    copy: "Tell us about your space in under a minute. Get a clear, flat-rate price, no walkthroughs required.",
  },
  {
    no: "02",
    title: "Pick a time that suits you",
    copy: "Choose a one-time clean or a recurring plan. We'll confirm your dedicated crew and arrival window.",
  },
  {
    no: "03",
    title: "Relax, we handle the rest",
    copy: "Our vetted team arrives on time, follows our 50-point checklist, and leaves your space immaculate.",
  },
];

export const gallery = [
  { src: "/images/gallery-kitchen.webp", alt: "Spotless modern kitchen with white quartz counters", label: "Kitchen reset" },
  { src: "/images/gallery-bathroom.webp", alt: "Pristine spa-like bathroom after a deep clean", label: "Spa bathroom" },
  { src: "/images/gallery-living.webp", alt: "Bright tidy living room with fresh vacuum lines", label: "Living room" },
  { src: "/images/gallery-bedroom.webp", alt: "Serene bedroom with crisp white hotel-grade linens", label: "Bedroom" },
];

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hannah Whitfield",
    role: "Homeowner · Leslieville",
    image: "/images/testimonial-1.webp",
    quote:
      "Our place has never looked better. The same two cleaners come every other week and they genuinely care about the details, I trust them completely with our home.",
    rating: 5,
  },
  {
    name: "Marcus Lindqvist",
    role: "Condo owner · CityPlace",
    image: "/images/testimonial-2.webp",
    quote:
      "Booking took a minute, the quote was exactly what I paid, and the team was early and immaculate. Easily the most professional cleaning service I've used in Toronto.",
    rating: 5,
  },
  {
    name: "Priya Anand",
    role: "Office Manager · Liberty Village",
    image: "/images/testimonial-3.webp",
    quote:
      "They clean our 40-person office after hours and we've never had a single complaint. Reliable, discreet and spotless every time. Couldn't recommend them more highly.",
    rating: 5,
  },
];

export const serviceAreas = [
  "Downtown Toronto",
  "North York",
  "Etobicoke",
  "Scarborough",
  "East York",
  "York",
  "Midtown",
  "The Beaches",
  "Liberty Village",
  "The Annex",
];

export const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Most of our clients provide secure entry instructions and go about their day. Every cleaner is background-checked, bonded and insured for your peace of mind.",
  },
  {
    q: "What's included in a standard clean?",
    a: "Dusting, vacuuming, mopping, kitchen and bathroom sanitizing, surfaces, mirrors and tidying, all following our 50-point checklist. Add deep-clean extras like inside the oven or fridge anytime.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes. We arrive fully equipped with professional, eco-friendly, non-toxic products and equipment. If you'd prefer we use your products, just let us know.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Our 100% satisfaction guarantee means we'll return within 24 hours to re-clean anything that didn't meet the mark, free of charge.",
  },
  {
    q: "Are you insured?",
    a: "Fully. We're insured and bonded, and every team member is vetted and background-checked before they ever set foot in your space.",
  },
];
