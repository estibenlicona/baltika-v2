/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(252 211 77 / var(--tw-bg-opacity, 1))',
      },
      gridTemplateColumns: {
        'positions-lg': '6px 40px 40px 1fr 40px 40px 40px 40px 40px 40px 40px 40px',
        'positions-sm': '4px 30px 30px 1fr 30px 30px 30px',
        'positions-head-lg': '1fr repeat(8, 40px)',
        'positions-head-sm': '1fr repeat(3, 30px)',
      }
    },
  },
  plugins: [],
};