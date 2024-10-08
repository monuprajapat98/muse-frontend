/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6f9fc",
        secondary: "#2a3547",
        blue: "#5235ff",
        grey: "#313c47",
        lightBlue:"#edf7fe",
      },
      spacing: {
        4.5: "18px",
      },
      height: {
        13: "52px",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      opacity: {
        24: "0.24",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
