/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');
const colors = {
  ...defaultColors,
  ...{
    'body-bg': '#182a4f',
    'name': '#fadb80',
  },
}

export default {
  content: ['index.html', './src/*.{js,html}'],
  theme: {
    fontFamily: {
      'body': ['"Noto Sans TC"', 'sans-serif'],
      'roboto': ['"Roboto"', 'sans-serif'],
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}

