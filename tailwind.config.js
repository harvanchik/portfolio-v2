module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
