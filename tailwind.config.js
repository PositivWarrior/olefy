const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37', // Gold for accents
        black: '#000000', // Deep black
        gray: {
          950: '#121212', // Very dark gray
        },
      },
      backgroundImage: {
        leather: "url('/textures/leather.png')",
        grille: "url('/textures/grille.png')",
      },
      fontFamily: {
        retro: ['"Playfair Display"', 'serif'], // Retro serif font
      },
      boxShadow: {
        retro: '0px 4px 6px 0px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-brass': {
          color: '#D4AF37',
        },
        '.border-brass': {
          borderColor: '#D4AF37',
        },
      });
    }),
  ],
};
