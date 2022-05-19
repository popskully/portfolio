module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        prime: "#0152CC",
        darkBlue: "#002A68",
        lightBlue: "#D9E5F8",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        1: "-0.025em",
      },
      rotate: {
        30: "30deg",
      },
    },
  },
  plugins: [],
};
