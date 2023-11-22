/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-daytime": "url(./assets/mobile/bg-image-daytime.jpg)",
        "mobile-nightime": "url(./assets/mobile/bg-image-nighttime.jpg)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
