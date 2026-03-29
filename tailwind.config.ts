import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#502164",
          light: "#6b2d85",
          dark: "#3a1849",
        },
        magenta: {
          DEFAULT: "#b3228e",
          light: "#d42aa8",
          dark: "#8a1a6e",
        },
        cyan: {
          DEFAULT: "#45b7d1",
          light: "#6dcde3",
          dark: "#2e94ad",
        },
      },
    },
  },
  plugins: [],
};

export default config;
