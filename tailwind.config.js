/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        onest: ["Onest", "sans-serif"]
      }
    },
    colors:{
      'black': '#000000',
      'white': '#fff',
      'red': '#ef233c',
      'light-gray': "#ececec"
    }
  },
  
  plugins: [],
}

