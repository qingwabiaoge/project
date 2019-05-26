const pkg = require('./package')

module.exports = {
  mode: 'universal',
  // performance: {prefetch: false},
  router: {
    linkActiveClass: 'active',//当前流和上级栏目
    middleware: [
      //'auth',
      'ua'
    ]
  },
  mytest: {a: 'mytest'},

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '/script/script.js'}]

  },
  modules: [
    //styled-vue并非 vue-styled-component
    'styled-vue/nuxt',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    /*预先引入到各个vue文件中*/
    // less: ['./assets/less/variables.less'],
    /*  options: {
        // See https://github.com/yenshih/style-resources-loader#options
        // Except `patterns` property
      }*/
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#f0f'},

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  axios: {

    prefix: '/api', // baseURL
    // credentials: true,
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

    {src: "~/plugins/axios"},
    {src: '~/plugins/element-all.js'},
    {src: '~/plugins/localStorage.js', ssr: false},
    {src: '~/styled/'},
    {src: '~/plugins/import.js'},
    {src: '~/plugins/ctx.js'},


    {src: '~/plugins/combined-inject.js'},
    {src: '~/plugins/Vue.js'},
    {src: '~/plugins/lei-ui.js'},
    {src: '~/plugins/vue-mixin.js'},
    {src: '~/plugins/vue-protype.js'}


  ],


  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    loaders: {
      imgUrl: {limit: 20 * 1000},
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, {isClient}) {
      // 为 客户端打包 进行扩展配置
      if (isClient) {
        console.log('打包时间使用')

      }
    }

  }
}
