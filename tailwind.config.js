/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      backgroundImage: {
        banner: "url('./assets/images/banner.svg')",
        instructionBg: "url('./assets/images/instruction-bg.svg')",
        submitNuibBg: "url('./assets/images/submit-nuib-icon.svg')",
      },
      colors: {
        "dark-1": "#4C4C4C",
        "dark-2": "#363636",
        "dark-3": "#373636",
        "grey-1": "#E6E6E6",
        "grey-2": "#646363",
        "grey-3": "#fcfcfc",
        "grey-4": "#D9D9D9",
        "grey-5": "#8A8E8E",
        green: "#EAF3F4",
        "green-1": "#009B72",
        "green-2": "rgba(217, 217, 217, 0.15)",
        "green-3": "#007687",
        "green-4": "rgba(235, 240, 241)",
        "green-5": "#1EBF95",
        "red-1": "#DC3027",
        "red-2": "#F14950",       
        "orange-1": "#FF4F07",
        "yellow-1": "#FFAF2A",      
        "blue-1": "rgba(81, 153, 219, 0.69)",
        "blue-2": "#0890FE",
        "red-3": "#F4473E",  
        "red-4": "rgba(250, 12, 0, 0.32)",  
        "red-5": "#FF7C75",          
      },
      width: {
        679: "679px",
        411: "411px",
        367: "367px",
        272: "272px",
        200: "200px",
        196: "196px",
        149: "149px",
        109: "109px",
        13: "13px",
      },
      height: {
        605: "605px",
        220: "220px",
        149: "149px",
        86: "86px",
        77: "77px",
        68: "68px",
        65: "65px",
        62: "62px",
        51: "51px",
        13: "13px",
      },
      boxShadow: {
        "3xl": "-5px 6px 24px rgba(0, 0, 0, 0.18)",
        "4xl": "-2px 4px 30px rgba(0, 0, 0, 0.16)",
      },
      fontSize: {
        27: "27px",
      },
      borderRadius: {
        5: "5px",
        11: "11px",
        29: "29px",
      },
      padding: {
        31: "31px",
        38: "38px",
        41: "41px",
        47: "47px",
        61: "61px",
        165: "165px",
      },
      margin: {
        31: "31px",
      },
      backgroundImage: {
        inActive:
          "linear-gradient(95.73deg, rgba(0, 118, 135, 0.08) 0.9%, rgba(0, 118, 135, 0.06) 52.54%, rgba(0, 118, 135, 0.02) 99.06%), rgba(235, 240, 241, 0.3)",
        active:
          "linear-gradient(0deg, #009B72, #009B72), rgba(235, 240, 241, 0.3)",
      },
      gap: {
        189: "189px",
      },
    },
  },
  plugins: [],
};
