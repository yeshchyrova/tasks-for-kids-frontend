/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx, ts, tsx}"],
  theme: {
    colors: {
      signin: {
        dark: "#063150",
        blue: "#1A6296",
      },
      blue: "#2176AE",
      brown: "#BB7F32",
      yellow: "#FBB13C",
      red: "#FE6847",
      greybg: "#EFEFEF",
      dark: "#1C1C1C",
      grey: "#939393",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
