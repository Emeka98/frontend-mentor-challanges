/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        'sans-serif' : ['Inter', 'sans-serif'],
        'serif' : ['Lora', "serif"],
        'mono' : ['Inconsolata', "monospace"]
      }
    },
  },
  plugins: [],
}

