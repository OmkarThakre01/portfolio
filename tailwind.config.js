/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DM: ["DM Sans", "sans-serif"],
        Great : ["Dancing Script", "cursive"],
        Press: ['"Press Start 2P"', 'cursive'],
        Poppins : ["Poppins", " sans-serif"]
      },
      spacing: {
        '112': '28rem',  // Custom values
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
      },
    },
  },
  plugins: [],
};
