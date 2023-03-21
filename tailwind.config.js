/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './molecules/**/*.{js,ts,jsx,tsx}',
    './organisms/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        beige: '#ebe9e3',
        primary: '#39c66b'
      },
      fontFamily: {
        primary: `'Poppins', sans-serif;`
      },
      fontSize: {},
      screens: {
        '2xl': '1440px',
        '3xl': '1536px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
