module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        midmd: '26rem',
      },
      colors: {
        blackDisplay: '#341E17',
        blackText: '#6B5248',
        brandOrange: '#FF5A1F',
        secondOrange: '#FFEEE8',
        inputOrange: '#FFCEBD',
        whiteBG: '#FAFAFA',
      },
      fontFamily: {
        body: ['Red Hat Display', 'sans-serif']
      },
      lineHeight: {
        'extra-loose': '3.3'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
