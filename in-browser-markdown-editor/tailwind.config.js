/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-1000": "#151619",
        "black-900": "#1D1F22",
        "black-800": "#2B2D31",
        "black-700": "#35393F",
        "black-600": "#5A6069",
        "black-500": "#7C8187",
        "black-400": "#C1C4CB",
        "black-300": "#E4E4E4",
        "black-200": "#F5F5F5",
        orange: "#E46643",
        "orange-hover": "#F39765",
      },
      fontFamily: {
        roboto: ["roboto", "Sans-Serif"],
        "roboto-slab": ["Roboto Slab", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
