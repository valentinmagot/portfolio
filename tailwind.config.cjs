/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        primary:"rgba(253, 149, 25, 1)",
        highEmphasis:"rgba(37, 40, 43, 1)",
        mediumEmphasis:"rgba(130, 130, 130, 1)",
        lowEmphasis:"rgba(154,159,168,1)",
        bright:"rgba(255, 255, 255, 1)",
        drab:"rgba(249, 250, 255, 1)",
        dark:"rgba(37, 40, 43, 1)"

      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"]

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}
