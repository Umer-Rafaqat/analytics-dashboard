/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2edfb',
          100: '#e1d2f5',
          400: '#8a5cd9',
          500: '#7847d1',
          600: '#6E39CB', // exact Figma value
          700: '#5c2fac',
        },
        surface: '#f4f4f7',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        card: '30px',
      },
    },
  },
  plugins: [],
};
