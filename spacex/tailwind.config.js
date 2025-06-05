/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["var(--font-krona)", "sans-serif"],
        league: ["var(--font-league)", "sans-serif"],
      },
      fontSize: {
        "120px": "120px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", 
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};