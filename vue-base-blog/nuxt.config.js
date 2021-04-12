import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: process.env.FIRST_TITLE + ' | ' + process.env.SECOND_TITLE,
    title: process.env.FIRST_TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.SECOND_TITLE },
      { hid: 'og:type', property: 'og:type', content: 'blog' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: process.env.SECOND_TITLE },
      { hid: 'og:description', property: 'og:description', content: 'フリーエンジニアが生き抜くための技術まわりとお金まわり' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'twitter:card', neme: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@A_MxT_' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/scrollactive.ts', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],

  generate: {
    fallback: true
  },

  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        'remark-emoji',
        'remark-toc',
        'remark-footnotes',
        'remark-code-titles',
        'remark-footnotes'
      ],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.green.darken3,
          secondary: colors.teal.base,
          accent: colors.cyan.base,
          error: colors.red.base,
          warning: colors.amber.base,
          info: colors.blue.base,
          success: colors.lime.base,
          background: colors.brown.lighten5
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
