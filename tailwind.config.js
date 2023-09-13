/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1726px',
      },
    },
    extend: {
      colors: {
        text: {
          main: '#606060',
          dark: '#383838',
          light: '#756C62',
        },
        border: {
          main: '#D8D8D8',
        },
        background: {
          main: '#FFFCF7',
          dark: '#EBEBEB',
        },
        accent: {
          main: '#479E74',
        },
      },
      fontFamily: {
        primary: 'CartographCF',
        secondary: 'Times',
      },
    },
  },
  plugins: [],
};
