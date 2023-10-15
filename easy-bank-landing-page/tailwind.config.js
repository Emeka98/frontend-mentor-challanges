/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-dekstop": "url(./assets/bg-intro-desktop.svg)",
        "hero-pattern-mobile": "url(./assets/bg-intro-mobile.svg)",
        "hero-mockups" : "url(./assets/image-mockups.png)",

      },
      backgroundPosition: {
        "custom-right": "right -20rem top -10rem",
      },

      fontFamily: {
        public: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
