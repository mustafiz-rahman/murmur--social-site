export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'murmur',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // router: {
  //   middleware: ['auth']
  // },
  axios: {
    baseURL: 'http://localhost:3001',
    credentials: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/signin',
            method: 'post',
            propertyName: 'accessToken'
          },
          logout: { 
            url: '/auth/signout', 
            method: 'post' 
          },
          user: { 
            url: '/auth/me', 
            method: 'get', 
            propertyName: false 
          },
          
        },
        
        
      },
      
      
    }
  },
  cookie: {
    cookie: {
      // (optional) If set, we check this cookie existence for loggedIn check
      name: 'XSRF-TOKEN',
    },
    endpoints: {
      // (optional) If set, we send a get request to this endpoint before login
      csrf: {
        url: ''
      }
    }
  },

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
 