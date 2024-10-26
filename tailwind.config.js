/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        priRed: '#FF0000',
        bgColor: '#282B2E',
      },
    },
  },
  plugins: [],
}
