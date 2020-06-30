import pkg from './package'

export default {
  mode: 'universal',
  target: 'static', // full static mode
  components: true,
  content: {
    dir: 'content',
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'TFH - Travel to somewhere new From Home - Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'https://res.cloudinary.com/mayashavin/image/upload/w_16,h_16,c_scale/v1593071704/nuxt_demo/tfh_logo_main.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/cloudinary.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    // Simple usage
    // '@nuxtjs/color-mode',
    ['@nuxtjs/pwa', { icon: false }]
  ],
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme'
  // },
  pwa: {
    meta: {
      name: 'TFH - Travel to somewhere new From Home - Demo',
      description: 'A demo page about TFH static sites with Nuxt',
      theme_color: '#cc0f01',
      ogSiteName: 'TFH - Travel to somewhere new From Home - Demo',
      ogTitle: 'TFH - Travel to somewhere new From Home - Demo',
      ogImage: {
        path:
          'https://res.cloudinary.com/mayashavin/image/upload/w_512,h_512,c_scale,q_auto/v1593071704/nuxt_demo/tfh_logo.png',
        width: 512,
        type: 'png'
      },
      ogHost: 'https://full-static-app.vercel.app',
      twitterCard: 'summary_large_images'
    }
  },
  hooks: {
    'content:file:beforeInsert': document => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text
      }
    }
  }
}
