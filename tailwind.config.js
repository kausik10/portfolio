/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark_bg" : "#2e3944",
        "dark_nav" : "#212a31",
        "light_text":  "#d1e8e2",
        
        "light_bg" : "#eae7dc",
        "light_nav": "#d3d9d4",
        "dark_text": "#212a31",

        "primary_btn" : "#124e66",
        "secondary_btn": "#748d92",
        "primary_border": "#66fcf1",
        "secondary_border": "#45a29e",
      },
      boxShadow: {
        'dark-shadow': '0 4px 6px -1px rgba(33, 42, 49, 0.5), 0 2px 4px -1px rgba(33, 42, 49, 0.6)', // dark_nav color with opacity
        'light-shadow': '0 4px 6px -1px rgba(211, 217, 212, 0.5), 0 2px 4px -1px rgba(211, 217, 212, 0.6)', // light_nav color with opacity
      },
      backgroundPattern :{
        'computer-pattern': "url('/public/bgpattern.svg')",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #2e3944, #212a31, #d1e8e2, #eae7dc, #d3d9d4, #212a31, #124e66, #748d92, #66fcf1, #45a29e)',
      },
    },
  },
  plugins: [],
}

