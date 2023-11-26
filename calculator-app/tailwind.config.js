/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        primary: "0px -4px 0px 0px #B3A497 inset",
        secondary: "0px -4px 0px 0px #414E73 inset",
        danger: "0px -4px 0px 0px #93261A inset",
      },
    },
  },
  plugins: [],
};
