/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
    },
    colors: {
      light: {
        text: "hsl(0, 71%, 4%)",
        background: "hsl(15, 40%, 98%)",
        primary: "hsl(15, 100%, 63%)",
        secondary: "hsl(18, 32%, 92%)",
        accent: "hsl(15, 32%, 22%)",
      },
      dark: {
        primary: "hsl(180, 80%, 52%)",
        secondary: "hsl(180, 17%, 8%)",
        accent: "hsl(180, 40%, 54%)",
        text: "hsl(15, 40%, 98%)",
        background: "hsl(0, 0%, 5%)",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
