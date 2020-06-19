import colors from 'vuetify/lib/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mohsen Pakzad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
 ** vuetify module configuration
 ** https://github.com/nuxt-community/vuetify-module
 */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.grey.darken4,
          secondary: colors.grey.lighten5,
          accent: colors.shades.black,
          error: colors.red.accent3,
          info: colors.teal.lighten1,
          success: colors.green.accent4,
          warning: colors.amber.base
        },
        dark: {
          primary: colors.grey.lighten5,
          secondary: colors.grey.darken4,
          accent: colors.shades.black,
          error: colors.red.accent3,
          info: colors.teal.lighten1,
          success: colors.green.accent4,
          warning: colors.amber.base
        },
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
