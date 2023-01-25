/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-1": "#4C4C4C",
        'grey-1': '#E6E6E6',
        'grey-2': '#646363',
        'grey-3': '#fcfcfc',
        'green-1': '#009B72',
        'red-1': '#DC3027',
      },
      backgroundImage: {
        'banner': "url('./assets/images/banner.svg')",
      },
      width: {
        '411': '411px',
        '367': '367px',
      },
      height: {
        '605': '605px',
        '51': '51px'
      },
      boxShadow: {
        '3xl': '-5px 6px 24px rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}
