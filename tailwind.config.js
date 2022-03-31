module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",

        "neutral-dark-blue": "hsl(234, 12%, 34%)",
        "neutral-grayish-blue": "hsl(229, 6%, 66%)",
        "neutral-light-gray": "hsl(0, 0%, 98%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },
    },
  },
  plugins: [],
};
