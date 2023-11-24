/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#070724",
        "dark-gray": "#38384F",
        "light-gray": "#838391",
        blue: "#419EBB",
        yellow: "#EDA249",
        purple: "#6D2ED5",
        orange: "#D14C32",
        red: "#D83A34",
        "light-orange": "#CD5120",
        turq: "#1EC1A2",
        "royal-blue": "#2D68F0",
      },
      backgroundImage: {
        stars: "url(/src/assets/background-stars.svg)",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
