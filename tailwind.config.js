/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(252 211 77 / var(--tw-bg-opacity, 1))',
      }
    },
  },
  plugins: [],
};