/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BB77E",
        secondary: "#e7ecef",
        black: "#2d2d2d",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        sm: "0",
      },
    },
  },
  plugins: [],
};
