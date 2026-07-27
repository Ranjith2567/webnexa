/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#07090f",
        cardBg: "#0b0f19",
        neonBlue: "#38bdf8",
        luxuryGold: "#f59e0b",
      },
    },
  },
  plugins: [],
}