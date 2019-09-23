module.exports = {

  //不渲染ui目录
  ignore: [
    'pages/-ui/*',
    'pages/-demo/*',
    'pages/api/*',
  ],
  // static: {'index': ['index.html', 'index.htm']},
  //本配置可以在server ,插件$axios使用
  env: {
    // HOST: process.env.HOST,
    HOST: '127.0.0.1',
    PORT: 3003
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
    title: 'senboma_bonniena',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Guangzhou Senboma Artware Co., LTD. is a professional manufacturer and exporter that is concerned with the design, development and production of false nails. We are Established in 2 0 1 2, located in Panyu, Guangzhou. All of our products comply with international quality standards and are greatly appreciated in a variety of different markets throughout the world. Covering and area of 5,000 m2, we now have 150 workers, our production capacity is 2 million units per month. By focusing on new technology and new designs creation, we take our clients over 500 new colors and designs false nails to our customers every year. Our well-equipped facilities and excellent quality control throughout all stages of production enables us to guarantee customer satisfaction. Senboma have the G M P certificate. As a professional cosmetics factory, our false nails and nail glue passed S V H C, Heavy Metal, Microbial test and other related tests according the Europe and U S requirements. As a result of our high quality products, new creation designs and outstanding customer service, we have gained a global sales network reaching U K, U S, Europe, Australia, Korea. If you are interested in any of our products or would like to discuss a customized order, please feel free to contact us. We are looking forward to building a mutual beneficial business relationships with new clients around the world in the near future.'
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
  // loading: '~/loading/',
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
    "~/plugins/process",
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
