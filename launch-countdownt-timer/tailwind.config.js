/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "red-head": ["Red Hat Text", "sans-serif"],
      },
      backgroundImage:{
        'star' : 'url(/src/assets/bg-stars.svg)',
        'hills' : 'url(/src/assets/pattern-hills.svg)'
      }
    },
  },
  plugins: [],
};
