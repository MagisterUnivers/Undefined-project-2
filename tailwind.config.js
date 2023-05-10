/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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

        'blue-1': '#3e85f3',
        'blue-2': '#e3f3ff',
      },
      fontSize: {
        14: '14px',
        16: '16px',
      },
      lineHeight: {
        17: '17px',
        19: '19px',
      },
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      padding: {
        2: '10px',
        3: '14px',
      },
    },
  },
  plugins: [],
};
