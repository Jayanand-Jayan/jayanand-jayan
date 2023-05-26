/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'merienda': ['Merienda', 'cursive'],
        'ptserif': ['PT Serif', 'serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
        'lobster': ['Lobster', 'cursive'],
        'zen-tokyo-zoo': ['Zen Tokyo Zoo', 'cursive']
      },

      colors: {
        darkPurple: {
          800: "#460163"
        }
      }
    },
  },
  plugins: [],
});

