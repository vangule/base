/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'off-white': '#F8FAFF',
        "white-2" : "#F5F5F5",
        "black-2": "#030229",
        "off-gray": '#858585',
        "gray-1": "#999999",
        "gray-2": "#999CA0",
        "gray-3": "#9A9AA9",
        "gray-4": "#ccc",
        "gray-5": "#333",
        "blue-1": "#346BD4",
        "blue-2": "#605BFF",
        "grey-1": "#EBEBEB",
        "red-1": "#ff3333",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
