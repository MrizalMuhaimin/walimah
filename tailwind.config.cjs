/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice"],
        tanPearl: ["TanPearl"],
      },
      fontSize: {
        body1: "20px",
        body2: "16px",
        body3: "14px",
        body4: "12px",
        body5: "10px",
        header1: "32px",
        header2: "20px",
        header3: "14px",
        header4: "12px",
      },
      colors: {
        DEFAULT: "#ECECEC",

        //  Steel Blue:
        steel100: "#EDF3F8",
        steel700: "#2B506E",
        steel600: "#396A93",
        steel500: "#4682B4",
        steel400: "#7EAACD",
        steel300: "#A3C2DB",

        //coklat
        coklat800: "#4C3626",
        coklat700: "#6E513B",
        coklat600: "#906D53",
        coklat500: "#B28A6D",
        coklat400: "#D4A989",
        coklat300: "#F3D7BB",
        coklat200: "#FAEDE3",
        coklat100: "#FFFAF7",

        //hijau
        hijau800: "#435316",
        hijau700: "#627234",
        hijau600: "#869854",
        hijau500: "#9DB167",
        hijau400: "#BFD583",
        hijau300: "#DCF0A3",
        hijau200: "#EFFAD0",
        hijau100: "#F9FFE9",

        // netral
        white: "#FFFFFF",
        blackNeutral: "#2F2F2F",
        grey: "#EEEEE",

        //Accent
        danger600: "#5B0707",
        danger500: "#8E1414",
        danger400: "#C12A2A",
        danger300: "#F44747",
        danger200: "#FF9B9B",
        danger100: "#FFEDED",

        warning600: "#643E11",
        warning500: "#8E6514",
        warning400: "#D1B51E",
        warning300: "#F4D947",
        warning200: "#FFEF9B",
        warning100: "#FFFCED",

        success600: "#435B24",
        success500: "#6C854C",
        success400: "#98B277",
        success300: "#BEDB9A",
        success200: "#E7F4D5",
        success100: "#FCFFF8",
      },
      scale: {
        120: "1.2",
        "-100": "-1",
      },
      backgroundImage: {
        blueGradient:
          "linear-gradient(180deg, #1D3549 10%, #396A93 15%, #4682B4 100%)",
      },
      // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: "#FFFFFF" },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
