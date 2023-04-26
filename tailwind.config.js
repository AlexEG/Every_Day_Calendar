/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        gold: "#ffc300",
        gold2: "#ffd60a",
      },
      boxShadow: {
        days: "0 0 0 2px black,0 0 0 4px #f59e0b,0 0 0 6px black,0 0 0 8px #f59e0b,0 0 0 10px black,0 0 0 12px #f59e0b",
      },
    },
  },
  plugins: [],
};
