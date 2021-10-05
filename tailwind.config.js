module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#622c8b',
        secondary: '#8fd300',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
