/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url(/background-pattern-desktop.svg)",
        "hero-mobile": "url(/background-pattern-mobile.svg)",
      },
    },
  },
  plugins: [],
};
