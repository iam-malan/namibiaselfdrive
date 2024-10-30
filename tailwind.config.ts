import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A5D23",
        secondary: "#FF5F3D",
        background: "#F5F5F0",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
