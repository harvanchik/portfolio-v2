module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Gaegu', 'cursive'],
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
