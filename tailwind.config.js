/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans-serif']
    },
    extend: {
      spacing: {
        '38': '38px',
      }
    }
  },
  plugins: [],
}
