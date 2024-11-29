/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx, ts, tsx}"],
  theme: {
    colors: {
      primary: {
        a0: "",
        a20: "",
      },
    },
    // spacing: {
    //   4: "4px",
    //   8: "8px",
    //   12: "12px",
    //   20: "20px",
    // },
    borderRadius: {
      none: "0",
      sm: "4px",
      lg: "12px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
