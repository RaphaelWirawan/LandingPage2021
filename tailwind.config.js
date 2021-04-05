module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      ptsans: ['PT Sans', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      robotoMono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        deepAqua: '#67888D',
        greyqua: '#B3C9C9',
        lightBlack: '#595D60',
        offWhite: '#F2F8F8',
        grey: '#DDDDDD',
        offBlack: '#0B0C0D',
        whiteWhite: '#F4F6F9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
