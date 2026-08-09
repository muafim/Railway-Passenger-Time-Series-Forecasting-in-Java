/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102a33",
        rail: "#087f8c",
        signal: "#e47b42",
        mist: "#f3f7f7",
      },
      boxShadow: {
        card: "0 18px 45px -28px rgba(15, 42, 51, 0.28)",
      },
    },
  },
  plugins: [],
};
