/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-90": "#1A1A1A",
        "black-80": "#232323",
        "black-70": "#333333",
      },
      boxShadow: {
        card: "0px 6px 12px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "img-light": "url('/bg-light.png')",
        "img-dark": "url('/bg-dark.png')",
      },
    },
  },
  plugins: [],
};
