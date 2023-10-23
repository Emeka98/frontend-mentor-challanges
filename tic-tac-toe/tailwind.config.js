/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "light-blue": "#31C3BD",
        "light-blue-hover": "#65E9E4",
        "light-yellow": "#F2B137",
        "light-yellow-hover": "#FFC860",
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        silver: "#A8BFC9",
        "silver-hover": "#DBE8ED",
      },

      boxShadow: {
        "custom-player-pick": "0px -8px 0px 0px #10212A inset",
        "custom-primary-button": "0px -8px 0px 0px #CC8B13 inset",
        "custom-secondary-button": "0px -8px 0px 0px #118C87 inset",
      },
    },
  },
  plugins: [],
};
