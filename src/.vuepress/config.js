const helpers = require('./helpers')

module.exports = {
  title: 'Techspirit Mallorca',
  //base: '/web/',
  themeConfig: {
    nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Contacto', link: '/contact/' },
    ],
    sidebar: {
      '/proposals/': helpers.utils.genSidebarConfig(
        'Propostes',
        './src/proposals/',
        true,
      ),
      '/meetings/': helpers.utils.genSidebarConfig(
        'Trobades',
        './src/meetings/',
        true,
      )
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': './src'
      }
    }
  },
  plugins: [
  ]
}
