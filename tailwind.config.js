/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",
        "2xl": "1280px",
      },
      padding: {
        DEFAULT: "0.8rem",
        sm: "1rem",
        md: "1.2rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
