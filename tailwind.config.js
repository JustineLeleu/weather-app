/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        weatherBlack: '#161616',
        weatherWhite: '#FFFFFF',
        weatherGray: '#4B4A4B',
        weatherLightGray: '#D5D5D5'
      },
      fontFamily: {
        'Dosis': ['Dosis', 'font-mono']
      },
    }
  },
  plugins: [],
}

