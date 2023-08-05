/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '578px',
    },
    extend: {
      backgroundColor: {
        darkBlue: '#000d23',
        lightBlue: '#abafb0',
      },
      textColor: {
        darkBlue: '#000d23',
        lightBlue: '#abafb0',
      },
    },
  },
  plugins: [],
};
