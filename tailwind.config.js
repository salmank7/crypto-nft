/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          // DEFAULT: "1rem",
          sm: "1rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
