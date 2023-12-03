/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  './header.html'],
  theme: {
    extend: {
      screens: {
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
}

