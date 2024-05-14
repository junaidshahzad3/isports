/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        kbpink: "#A4303F",
        footerblue: "#1B1F2E",
        dividercolor: "#2D313E",
      },
    },
  },
  plugins: [],
};
