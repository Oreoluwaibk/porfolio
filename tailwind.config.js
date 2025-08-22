/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pri": "#3c323c",
        "prim": "#0D1117",
        "heading": "#001529",
        "text": "#F5F5F5",
        "accent": "#58A6FF",
        "cta": "#2F81F7",
        "sec": "#a3847f",
        "sec-1": "#b49b96",
        "sec-2": "#bca6a2",
        "sec-3": "#c4b1ad",
        "sec-4": "#cdbcb9",
        "sec-5": "#ddd2d0",
        "sec-6": "#eee8e7"
      }
    },
  },
  plugins: [],
};
