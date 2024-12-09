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
    // spacing: {
    //   4: "4px",
    //   8: "8px",
    //   12: "12px",
    //   20: "20px",
    // },
    // borderRadius: {
    //   none: "0",
    //   sm: "8px",
    //   md: "12px",
    //   lg: "16px",
    //   lg2: "24px",
    //   round: "50%"
    // },
    // fontFamily: {
    //   sans: ["Poppins", "sans-serif"],
    // },
  },
  plugins: [],
};
