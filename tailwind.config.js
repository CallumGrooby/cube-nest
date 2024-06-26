/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mavenPro: ["Maven Pro", "sans-serif"],
      },
      colors: {
        primary: "#3F3E43",
        secondary: "#FC414E",
        background: "#F4F3EC",
      },
      stroke: {
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
