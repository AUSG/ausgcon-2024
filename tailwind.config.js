/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "first-reveal": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
        "second-reveal": {
          from: { opacity: "0", transform: "translateY(20px)" },
          '50%': { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0px)" }
        },
        "third-reveal": {
          from: { opacity: "0", transform: "translateY(20px)" },
          '66%': { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0px)" }
        },
      },
      animation: {
        "appear-first": "first-reveal 0.5s ease-in-out",
        "appear-second": "second-reveal 0.5s ease-in-out",
        "appear-third": "third-reveal 0.5s ease-in-out"
      }
    },
  },
  plugins: [],
}

