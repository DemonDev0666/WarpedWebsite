/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        Default: "20px",
        md: "40px",
      }
    },
    colors: {
      'Gray1': '#313037',
      'Gray2': '#424347',
      'Purple1': '#7854AB',
      'Purple2': '#9C75DB',
      'Cyan1': '#368384',
      'Cyan2': '#48B5A7'
    },
  },
  plugins: [],
};