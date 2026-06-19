import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/site";
import { DusterCursor } from "@/components/DusterCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Premium home & office cleaning across all of Toronto. Insured, vetted teams, eco-friendly products and a 100% satisfaction guarantee. Get a free flat-rate quote in 60 seconds.";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotless.ca"),
  title: {
    default: `${business.legalName} · ${business.tagline} | Toronto Cleaning Service`,
    template: `%s · ${business.name}`,
  },
  description,
  keywords: [
    "Toronto cleaning service",
    "house cleaning Toronto",
    "office cleaning Toronto",
    "deep cleaning Toronto",
    "move out cleaning",
    "eco-friendly cleaners Toronto",
  ],
  authors: [{ name: business.legalName }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: `${business.legalName} · ${business.tagline}`,
    description,
    siteName: business.legalName,
    images: [{ url: "/images/hero.webp", width: 1400, height: 760, alt: `${business.name} cleaning` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.legalName} · ${business.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E8779",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseAndOfficeCleaningBusiness" as const,
  name: business.legalName,
  description,
  telephone: business.phoneDisplay,
  email: business.email,
  areaServed: "Toronto, Ontario",
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  openingHours: "Mo-Sa 08:00-19:00",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <DusterCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
