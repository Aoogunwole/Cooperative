/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      chakra: ["Chakra Petch", "sans-serif"],
      
    },
    extend: {
      colors: {
        primary: "#195C62",
        black: "#060606",
        orange: "#E65F2B",
        light: "#F9E6DB",
        green: "#1A932E",
        grey: "#D0D5DD"
      },
    },
  },
  plugins: [],
}

