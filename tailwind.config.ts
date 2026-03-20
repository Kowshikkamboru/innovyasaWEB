import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B2B",
          50: "#FFF3EE",
          100: "#FFE4D5",
          200: "#FFC9AB",
          300: "#FFAE81",
          400: "#FF8F50",
          500: "#FF6B2B",
          600: "#E85A1C",
          700: "#C44A14",
          800: "#9E3B0F",
          900: "#7A2E0C",
        },
        navy: {
          DEFAULT: "#0D1B3E",
          50: "#E8EBF5",
          100: "#C5CCEA",
          200: "#8A9AD3",
          300: "#5068BC",
          400: "#2A3E9E",
          500: "#0D1B3E",
          600: "#0B1735",
          700: "#08112A",
          800: "#060C1F",
          900: "#030814",
        },
        orange: {
          light: "#FF8C52",
          DEFAULT: "#FF6B2B",
          dark: "#E55A1C",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
