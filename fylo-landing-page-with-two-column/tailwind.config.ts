import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "curve-mobile": "url(/bg-curve-mobile.svg)",
        "curve-desktop": "url(/bg-curve-desktop.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
