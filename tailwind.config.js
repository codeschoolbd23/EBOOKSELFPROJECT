/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // এটি থাকা বাধ্যতামূলক
  daisyui: {
    themes: ["light", "dark", "cupcake", "cyberpunk"], // এই থিমগুলো কাজ করবে
  },
};
