import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-up-1": "fadeUp 0.6s 0.1s ease-out both",
        "fade-up-2": "fadeUp 0.6s 0.25s ease-out both",
        "fade-up-3": "fadeUp 0.6s 0.4s ease-out both",
        "fade-up-4": "fadeUp 0.6s 0.55s ease-out both",
        "fade-up-5": "fadeUp 0.6s 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 4s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
