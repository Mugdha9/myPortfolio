/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        text_color: '#6e625d',
      },
      backgroundColor: {
        bgColor: '#f9f9f9',
      },
      colors: {
        fromColor: '#9f3f3f',
        toColor: '#b86e6e',
        cardColor: '#6e625d'
      }
    },
  },
  plugins: [],
}
