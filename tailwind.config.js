/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#282828",
        text: "#ebdbb2",
        primary: "#d79921",
        secondary: "#b16286",
        accent: "#458588",
        error: "#cc241d",
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
