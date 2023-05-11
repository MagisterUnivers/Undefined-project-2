/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
      gap: {
        2: '10px',
        4: '18px',
      },
      colors: {
        // stroke inactive icons
        'gray-1': '#84828A',
        'gray-2': ' #616161',
        'gray-2-dark': 'rgba(250, 250, 250, 0.3)',
        'gray-bg': ' #21222C',
        'black-text': '#343434',
        'gray-10': '#EAEAEA',

        'blue-1': '#3e85f3',
        'blue-2': '#e3f3ff',
      },
      fontSize: {
        14: '14px',
        16: '16px',
      },
      lineHeight: {
        17: '18px',
        19: '19px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      padding: {
        2: '10px',
        3: '14px',
      },
      width: {
        10: '131px',
        11: '225px',
        12: '241px',
      },
      height: {
        10: '46px',
        11: '56px',
      },
      minHeight: {
        '50px': '50px',
      },
    },
  },
  plugins: [],
};
