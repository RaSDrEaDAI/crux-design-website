import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        // Background system (dark grey, reduced purple)
        purple: {
          DEFAULT: "#1e1e2e",
          light: "#2a2a3e",
          dark: "#121220",
        },
        // Pink accent (replaces magenta)
        magenta: {
          DEFAULT: "#f472b6",
          light: "#f9a8d4",
          dark: "#ec4899",
        },
        // Teal accent (replaces cyan)
        cyan: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          dark: "#14b8a6",
        },
        // Purple accent color
        violet: {
          DEFAULT: "#a78bfa",
          light: "#c4b5fd",
          dark: "#8b5cf6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
