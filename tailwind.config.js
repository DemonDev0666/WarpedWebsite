/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%, 28%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
        typing: 'typing 2s steps(40, end) forwards',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite', // Corrected
      },
    },
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
      'Cyan2': '#48B5A7',
      "Red": "red"
    },
  },
  plugins: [],
};
