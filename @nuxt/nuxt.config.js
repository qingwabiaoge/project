module.exports = {

  //不渲染ui目录
  ignore: ['pages/-ui/*',
    'pages/-demo/*',
   'pages/api/*'
    ],
  // static: {'index': ['index.html', 'index.htm']},
  //本配置可以在server ,插件$axios使用
  env: {
    // HOST: process.env.HOST,
    HOST: '127.0.0.1',
    PORT: 3000
  },


  mode: 'universal',
  router: {
    linkActiveClass: 'active',//当前流和上级栏目
    scrollBehavior: function (to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    middleware: [
      //'auth',
      'ua'
    ]
  },


  /*
  ** Headers of the page
  */
  head: {
    title: '森伯马_广州森伯马工艺品有限公司_森伯马美甲_senboma_bonniena',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'BonnieNa 是广州森伯马公司旗下的穿戴美甲品牌，作为一家长期为国外知名一线品牌代工的穿戴美甲生产企业，一直专注于产品的开发和改良，以“带给中国女性时尚，便利，健康，自然的穿戴美甲” 为目标和宗旨，推出时下最流行的产品系列，让每一个穿戴的女性炫彩指尖'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],

    script: [
      {src: '/script/script.js'}]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#FB00C9'},

  /*
  ** Global CSS
  */
  css: ['~/assets/less/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/swiper.client.js',
    '~/plugins/lei-ui',
    '~/plugins/mixins',
    '~/plugins/vue-lazyload',
    "~/plugins/axios",
    "~/plugins/filter",
    //vuex持久化
    "~/plugins/vuex-persistedstate.client.js",
    //test----------------------
    "~/plugins/import",
    "~/plugins/combined-inject",


  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'styled-vue/nuxt',
    '@nuxtjs/axios'
  ],
  //axios: {

  //prefix: '/api', // baseURL
  // credentials: true,
  // },
  /*
  ** Build configuration
  */
  build: {

    babel: {
      "plugins": [["component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "~theme" //默认css分散包,按需加载,~theme"为element et sass生成工具的目录

        }
      ]]
    },

    loader: {

      fontUrl: {limit: 1000},
      imgUrl: {limit: 1000},

    },
    styleResources: {
      /*预先引入到各个vue文件中*/
      less: ['./assets/less/variables.less', './assets/less/mixins/_mixins.less'],
      /*  options: {
          // See https://github.com/yenshih/style-resources-loader#options
          // Except `patterns` property
        }*/
    },
    /*
    ** You can extend webpack config here
    */
    vendor: ['element-ui', '~/plugins/lei-ui', 'vue-lazyload'],
    extend(config, ctx) {
      // 为 客户端打包 进行扩展配置
      if (ctx.isClient) {
        console.log('打包时间使用')

      }
    }
  }

}
