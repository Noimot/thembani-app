const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.js'],
  theme: {
    colors: {
      green: {
        '50': '#EAF3F4',
      }

    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
      width: {
        '900': '985px',
        '65': '272px',
        '320': '320px',
        '400': '400px',
        '525': '485px',
        '76': '76px',
        '40': '40px'
      }
    },

  },
})
