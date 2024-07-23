/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        connectedColor: "var(--color-connected)",
        disconnectedColor: "var(--color-disconnected)",
        textLight: "var(--color-text-light)",
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
        stroke: {
          1: "#26242C",
        },
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  plugins: [],
}