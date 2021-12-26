module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
    colors: {
      green: 'rgb(35, 134, 54)'
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
