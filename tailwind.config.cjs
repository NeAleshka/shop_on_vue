/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/**/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        "screen-850": "850px",
      },
      backgroundColor: {
        "light-grey": "#F9F9F9",
        "dark-primary": "#2A254B",
      },
      fontFamily: {
        satoshi: "Satoshi, sans-serif",
      },

      textColor: {
        "dark-primary": "#2A254B",
        "light-grey": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
