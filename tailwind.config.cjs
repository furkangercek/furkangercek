module.exports = {
  content: [
    "./src/components/*.{html,ts,tsx}",
    "./src/screens/**/*.{html,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "light-6/160": "#ffffff06",
        "light-12/160": "#ffffff12",
        "light-9/160": "#ffffff09",
      },
    },
    fontFamily: {
      main: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
