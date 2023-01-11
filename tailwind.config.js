/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Oswald: ["Oswald", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Barlo: ["Barlow Condensed", "sans-serif"],
    },

    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    zIndex: {
      99: "99",
    },
  },
  plugins: [],
};
