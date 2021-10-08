module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      height: theme => ({
        "home-illu": '24rem'
      })
    },
    backgroundColor: theme => ({
      'primary': '#55495F',
      'secondary': '#FECB63',
      'ternary': '#F77D7F',
      'primary-hovered': '#463c4e',
      'secondary-hovered': '#d7ab53',
      'ternary-hovered': '#cd6869',
      'light-secondary':'#FFFAEF',
      'white':'#FFF'
    }),
    colors: {
      'basic':'#000',
      'primary': '#55495F',
      'secondary': '#FECB63',
      'ternary': '#F77D7F',
      'light-secondary':'#FFFAEF',
      'white':'#FFF'
    }
    // extend: {},
  },
  fill: theme => ({
    'white': '#FFF'
  }),
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
      skew: ['active', 'group-hover'],
      colors: {
        'basic':'#000',
        'primary': '#55495F',
        'secondary': '#FECB63',
        'ternary': '#F77D7F',
        'light-secondary':'#FFFAEF',
        'white':'#FFF'
      },
    },
  },
  plugins: [],
}
