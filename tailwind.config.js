/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#3B71FE',
          2: '#8BC5E5',
          3: '#92A5EF',
          4: '#58C27D',
        },
        secondary: {
          1: '#A4CDE3',
          2: '#E4D7CF',
          3: '#FFD166',
          4: '#FA8F54',
        },
        neutrals: {
          1: '#141416',
          2: '#23262F',
          3: '#353945',
          4: '#777E90',
          5: '#B1B5C3',
          6: '#E6E8EC',
          7: '#FFFFFF',
        },
      }
    },
  },
  plugins: [],
}