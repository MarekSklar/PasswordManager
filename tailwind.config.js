/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.html"
  ],
  theme: {
    colors: {
      "heather": {
        50: "#F2F0F5",
        100: "#E5E1EA",
        200: "#C8BFD4",
        300: "#AEA1BF",
        400: "#9483AA",
        500: "#7A6595",
        600: "#5E4F73",
        700: "#463A55",
        800: "#2D2537",
        900: "#120F16",
        950: "#0A080C"
      },
      "red": {
        50: "#FFE5E5",
        100: "#FFCCCC",
        200: "#FF9999",
        300: "#FF6666",
        400: "#FF3333",
        500: "#FF0000",
        600: "#CC0000",
        700: "#990000",
        800: "#660000",
        900: "#330000",
        950: "#190000"
      },
      "white": "#FFF",
      "black": "#000",
      "transparent": "transparent"
    },
    fontFamily: {
      BebasNeue: ["BebasNeueFont", "sans-serif"],
      CarroisGothic: ["CarroisGothicFont", "sans-serif"],
    },
    extend: {
      width: {
        "wfa": "-webkit-fill-available"
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        160: "40rem",
        192: "48rem"
      },
      animation: {
        longO: "longO 0.8s forwards",
        longOPadding: "longOPadding 0.8s forwards"
      },
      keyframes: {
        longO: {
          from: { width: "12px" },
          to: { width: "86px" }
        },
        longOPadding: {
          from: { padding: "0 calc( (86px - 12px) / 2 )" },
          to: { padding: "0" }
        }
      }
    },
  },
  plugins: [],
}

