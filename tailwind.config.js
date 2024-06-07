/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        n:{
          1:'#0E593C',
          2:'#ffc107',
        }
      },
      fontFamily:{
        inter:"Inter", 
      },
    },
  },
  plugins: [],
};
