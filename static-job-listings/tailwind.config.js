/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-mobile': 'url(./assets/bg-header-mobile.svg)',
        'hero-desktop': 'url(./assets/bg-header-desktop.svg)'
      },
      fontFamily:{
        'spartan' : ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
};
