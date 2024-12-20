/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Agu Display', "serif"],
        Noto: ['Noto Sans KR', "serif"],
      },
    },
    
  },
  plugins: [],
}