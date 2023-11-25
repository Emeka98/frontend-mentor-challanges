/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circle: "url(/bg-pattern-hero-home.svg)",
        "mobile-circle": "url(/bg-pattern-design-pages-intro-mobile.svg)",
        "desktop-circle": "url(/bg-pattern-call-to-action.svg)",
      },
      colors: {
        peach: "#E7816B",
        "light-peach": "#FFAD9B",
        black: "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
      },
    },
  },
  plugins: [],
};
