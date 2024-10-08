/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: "Roboto, sans-serif",
      },
      maxWidth: {
        phone: "428px",
      },
      colors: {
        primary: {
          DEFAULT: "#152830",
          card: "#031E2B",
          border: "#306151",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(0deg, #05130F 0%, #0E2026 100%)",
      },
    },
  },
  plugins: [],
};
