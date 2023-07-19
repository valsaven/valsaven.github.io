/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  extend: {
    colors: {
      vs: {
        'dashed-border-color': '#1da1f2',
        'main-accent-color-dark': '#1d1d1d',
        'main-bg-color-light': '#222',
        'main-bg-color-dark': '#292929',
        'body-bg-color-dark': '#525252',
        'main-border-color-dark': '#41b883',
        'main-text-color-dark': '#fff',
        'second-bg-color-dark': '#121212',
        'second-text-color-dark': '#aaa',
      },
      wings: {
        1: '#45ccca',
        2: '#8fd67a',
        3: '#e5d59a',
        4: '#e7966a',
        5: '#ed5589',
        6: '#b565c6',
        7: '#3366ff',
        8: '#7392ec',
      },
    },
  },
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
    poiret: ['Poiret One', 'sans-serif'],
    sans: ['Helvetica', 'Arial', 'sans-serif'],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme,
  plugins: [],
};
