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
        fromColor: '#524565',
        toColor: '#8E7EA6',
      }
    },
  },
  plugins: [],
}
