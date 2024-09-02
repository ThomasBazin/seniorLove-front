/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}",
    "./docs/**/*.html/"
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
        'homeBackground': "url('../../public/img/senior-taking-selfie-with-camera.webp')"
      },
    },
  },
  plugins: [],
}

