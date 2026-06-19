import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Modern Cozy, warm terracotta accent on warm neutrals.
        brand: {
          50: "#FBF2EC",
          100: "#F6E3D6",
          200: "#EDC7AE",
          300: "#E0A47F",
          400: "#D08456",
          500: "#BE6E3F",
          600: "#A85A30",
          700: "#8C4A28",
          800: "#723D23",
          900: "#5E341F",
        },
        // Warm near-black ink for text + deep espresso dark sections.
        ink: "#2C2620",
        night: "#2A211A",
        body: "#5A5248",
        muted: "#6F665A",
        // Warm, cozy neutrals.
        cream: "#FBF7F1",
        sand: "#F3EBDD",
        line: "#E7DCCB",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(60, 45, 30, 0.05), 0 12px 32px rgba(60, 45, 30, 0.07)",
        lift: "0 8px 24px rgba(60, 45, 30, 0.10), 0 28px 60px rgba(60, 45, 30, 0.14)",
        glow: "0 16px 38px rgba(168, 90, 48, 0.28)",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
