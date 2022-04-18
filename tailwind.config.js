module.exports = {
  purge: ["./src/**/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
