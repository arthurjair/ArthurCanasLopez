export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            lighthover: "#fcf4ff",
            darkhover: "#2a004a",
            
        },
        fontfammily: {
            figtree: ['Figtree', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}