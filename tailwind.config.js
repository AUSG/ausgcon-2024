/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: {opacity: "1", transform: "translateY(0px)" },
        }
      },
      animation: {
        appear: "reveal 1s ease-in-out"
      }
    },
  },
  plugins: [],
}

