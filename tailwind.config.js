module.exports = {
  content: ['./**/*.html', './game-card/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', 'san-serif'],
        inter: ['"Inter"', 'san-serif'],
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
