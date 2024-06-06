/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}","./component/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
          'yellow': '#B99317',
          'black': '#000102',
          'ash': '#B7B6C1',
          'gray': '#303030',
          'blue': '#587B7F',
      }
    },
  },
  plugins: [],
}

