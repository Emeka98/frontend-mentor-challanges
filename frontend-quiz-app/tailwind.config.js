/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': "#A729F5",
        "dark-navy": "#313E51",
        'navy': "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#ABC1E1",
        "light-grey": "#F4F6FA",
        'green': "#26D782",
        'red': "#EE5454",
      },
    },
  },
  plugins: [],
};
