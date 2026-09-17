/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071b33",
        "navy-soft": "#102947",
        paper: "#f8f9fc",
        mist: "#eef2fa",
        ink: "#182538",
        line: "#dbe2ec",
        brand: "#0872c9"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Libre Baskerville", "Georgia", "serif"]
      },
      maxWidth: { site: "80rem" },
      transitionDuration: { 350: "350ms" }
    }
  },
  plugins: []
};
