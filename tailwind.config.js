/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["emerald", "dark", "night"], 
    darkTheme: "night", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "", 
    logs: true, 
  },
}

