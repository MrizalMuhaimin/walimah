// const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        DEFAULT: '#ECECEC',
        grey: '#D0D0D0',
        red: '#FF3838',
        'dark-blue': '#383F59',
      },
      borderColor: {
        DEFAULT: '#ECECEC',
        grey: '#D0D0D0',
      },
      borderWidth: {
        DEFAULT: '1px',
        3: '3px',
        5: '5px',
      },
      minHeight: {
        med: '45px',
      },
      minWidth: {
        med: '164px',
      },
      borderRadius: {
        DEFAULT: '5px',
        sm: '3px',
      },
      padding: {
        small: '8px',
        medium: '12px',
      },
    },
  },
  plugins: [],
};
