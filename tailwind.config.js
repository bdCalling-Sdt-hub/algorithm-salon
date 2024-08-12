/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00A572",
        primary: "#E6F6F1",
        btn: "#217CC2",
        bgColor: "white",
        textColor: "#464343",
      },
    },
  },
  plugins: [],
}

