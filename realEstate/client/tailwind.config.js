/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Roboto Slab", "serif"],
        smallHeading: ["Nunito Sans", "serif"],
        Heading: ["Mochiy Pop One", "serif"],
      },
      colors:{
        yellow:"#FFEA00",
        darkYellow:"#FDDA0D"
      }
    },
  },
  plugins: [],
};
