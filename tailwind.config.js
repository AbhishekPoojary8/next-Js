/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
        preflight: false,
     },
  theme: {
    extend: {
      colors: {
       customGrey: "#f9f7f7",
       customBlue:"#2fa1f4",
        customGreen: '#54ca95',
        navBarColor: "#333",
        customBorder:"#eeeeee",
        // Add more custom colors as needed
        greyPallet: "#666666",
      
      },
      boxShadow: {
        'complex': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
      },
      variants: {
        extend: {
          translate: ['responsive', 'hover', 'focus', 'group-hover'],
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    },
  
  
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.shadow-complex': {
          'box-shadow': ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      };
      addUtilities(newUtilities, ['hover']);
    }),
  ],

};
