/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/**/**/*.{html,js,ts,jsx,tsx}',
    './docs/**/*.html/',
  ],
  theme: {
    extend: {
      colors: {
        'primaryPink': '#F3D6E0',
        'primaryGrey': '#EBEBEA',
        'primaryText': '#59616B',
        'secondaryPink': '#D85071',
        'buttonGreen': '#ADD5AF',
      },
      backgroundImage: {
        'homeBackground': "url('/img/senior-taking-selfie-with-camera.webp')"
      },
      boxShadow: {
        'mobileNav': '2px 0px 14px 3px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
};
