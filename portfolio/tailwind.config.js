module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('components/imgs/gymphoto.jpg')"
      }),
      // backgroundImage: theme => ({
      //   'hero-pattern': "url('kettlebell-lady.jpg')"
      // }),
      colors: {
        theme: {
          header: '#1f1e24'
        },
        best: {
          purple: '#551A8B'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
