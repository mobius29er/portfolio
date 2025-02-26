/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forestGreen: "#228B22",
        tan: "#D2B48C",
        gold: "#FFD700",
      },
      fontFamily: {
        artDeco: ["'Cinzel Decorative'", "serif"], // Example Art Deco font
      },
    },
  },
  plugins: [],
};
