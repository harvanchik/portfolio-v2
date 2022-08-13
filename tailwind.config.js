module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'san-serif'],
        handwriting: ['Gaegu', 'cursive'],
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
