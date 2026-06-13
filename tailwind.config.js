/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#4CAF50",
        accent: "#8BC34A",
        darkbg: "#0F172A",
        lightbg: "#F8FAF8",
      },
    },
  },

  plugins: [],
};