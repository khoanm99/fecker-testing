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
      animation: {
        'spin-circle': 'spin 1s linear infinite',
        'fadeIn-up': 'fadeInUp 0.5s forwards'
      },
      fontSize: {},
      screens: {
        '2xl': '1440px',
        '3xl': '1536px'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
