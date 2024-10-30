import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A5D23",
        "primary-dark": "#3A4D13",
        secondary: "#FF5F3D",
        background: "#F5F5F0",
        text: {
          DEFAULT: "#2c2c2c",
          light: "#4A5D23",
          muted: "rgba(74, 93, 35, 0.7)"
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
