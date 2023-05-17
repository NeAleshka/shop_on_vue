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
        xl: "1350px",
      },
    },
    fontFamily: {
      satoshi: "Satoshi, sans-serif",
    },
    backgroundColor: {
      "light-grey": "#F9F9F9",
      "dark-primary": "#2A254B",
    },
    textColor: {
      "dark-primary": "#2A254B",
      "light-grey": "#F9F9F9",
    },
  },
  plugins: [],
};
