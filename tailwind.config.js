/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'custom-image': "url('../assets/dark.jpg')",
        'dark-custom-image': "url('../assets/dark4.jpg')",
      }),
      fontFamily: {
        yellowtail: ['Yellowtail', 'Static'],
        oswald: ['Oswald'],
        prociono: ['Prociono'],
      },
      filter: {
        'invert-white': 'brightness(0) invert(1)', // Custom filter class
      },
    },
  },
  plugins: [],
};
