/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10a37f",
        text: "#2d333a",
        "gray-social-border": "#686868",
        "gray-mid": "#c2c8d0",
      },
      boxShadow: {
        "button-hover": "inset 0 0 0 150px rgba(0, 0, 0, .1);",
      },
    },
  },
  plugins: [],
};
