/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/**/**/*.{html,js,ts,jsx,tsx}',
    './docs/**/*.html/',
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#F3D6E0',
        primaryGrey: '#EBEBEA',
        primaryText: '#59616B',
        secondaryPink: '#D85071',
        buttonGreen: '#ADD5AF',
      },
    },
  },
  plugins: [],
};
