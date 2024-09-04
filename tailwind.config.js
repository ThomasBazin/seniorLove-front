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
        'secondaryPinkHover': '#e86484',
        'buttonGreen': '#ADD5AF',
        'backgroundPink': '#FFF4F7'
      },
      backgroundImage: {
        'firstForm': "url('/img/first-form.webp')",
        'secondForm': "url('/img/second-form.webp')",
        'thirdForm': "url('/img/third-form.webp')",
      },
      boxShadow: {
        'mobileNav': '2px 0px 14px 3px rgba(0,0,0,0.2)',
        'around': '1px 1px 7px 0px rgba(50,50,50,0.25)',
      }
    },
  },
  plugins: [],
};
