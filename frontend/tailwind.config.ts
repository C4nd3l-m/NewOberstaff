module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#f472b6",
          dark: "#1f1f1f",
          light: "#f9fafb",
          accent: "#7c3aed",
          secondary: "#e0e7ff",
          gray: "#6b7280",
          bgLight: "#ffe4ec",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        "brand-lg": "0 10px 30px -10px rgba(124, 58, 237, 0.4)",
      },
      transitionProperty: {
        colors: "color, background-color",
      },
    },
  },
  plugins: [],
};
