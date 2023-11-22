/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors:{

      },
      backgroundColor: {
        grayWhite : "#F7F7FE",
      },
      backgroundImage: {
        'top-image' : 'url(/src/assets/bg-top.svg)',
        'bottom-image' : 'url(/src/assets/bg-bottom.svg)'
      },
      boxShadow:{
        'custom' : "0px 20px 40px 0px rgba(212, 210, 244, 0.50)",
      }
    },
  },
  plugins: [],
};
