/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#2395FF",
      },
      boxShadow: {
        custom: "0px 8px 27px rgba(14, 63, 108, 0.19)",
      },
      prefix: "tw-",
    },
  },
  plugins: [],
};
