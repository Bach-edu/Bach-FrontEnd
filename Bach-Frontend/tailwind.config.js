/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'max-xs': { 'max': '479px' },
        'max-sm-mobile': { 'max': '599px' },
        'mobile': { 'max': '600px' },
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
      },
    },
  },
  plugins: [],
}
