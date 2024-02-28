/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,jsx}","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;",
      },
      colors: {
        back: "#F1FAEE",
        primary: "#1D3557",
        secondary: "#E63946",
        accent: "#A8DADC",
        blu:"#457B9D"
        
      },
    },
  },
  plugins: [],
};
