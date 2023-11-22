/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url(/src/assets/home/mobile/image-header.jpg)",
        "hero-tablet": "url(/src/assets/home/tablet/image-header.jpg)",
        "hero-desktop": "url(/src/assets/home/desktop/image-hero.jpg)",
        "card-image-mobile":
          "url(/src/assets/home/mobile/image-speaker-zx7.jpg)",
        "card-image-tablet":
          "url(/src/assets/home/tablet/image-speaker-zx7.jpg)",
        "card-image-desktop":
          "url(/src/assets/home/desktop/image-speaker-zx7.jpg)",
        "info-image-mobile":
          "url(/src/assets/shared/mobile/image-best-gear.jpg)",
        "info-image-tablet":
          "url(/src/assets/shared/tablet/image-best-gear.jpg)",
        "info-image-desktop":
          "url(/src/assets/shared/desktop/image-best-gear.jpg)",

      },
    },
  },
  plugins: [],
};
