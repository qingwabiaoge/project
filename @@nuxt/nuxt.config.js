module.exports = {

  // 不渲染ui目录
  ignore: [
    'pages/-ui/*',
    'pages/-demo/*',
    'pages/-mixins/*',
    'pages/api/*'
  ],
  // static: {'index': ['index.html', 'index.htm']},
  // 本配置可以在server ,插件$axios使用
  env: {
    // HOST: process.env.HOST,
    // 下方别忘了修改数据库地址+中英文配置!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    HOST: '127.0.0.1',
    // HOST: '47.107.170.105',
    // HOST: 'www.bonniena.com',
    PORT: 3001
  },

  //
  lang: 'en', // 'en'

  mode: 'universal',
  router: {
    linkActiveClass: 'active'// 当前流和上级栏目
    /*    scrollBehavior: function (to, from, savedPosition) {
              return {x: 0, y: 0}
            },
            middleware: [
              //'auth',
              'ua'
            ] */
  },

  server: {
    user: {
      role: 'administer',
      username: 'a',
      password: 'a'

    },
    adminJwtString: 'qinshilei',
    vipJwtString: 'qinshilei',
    database: 'mongodb://localhost:27017/senboma',
    // database: 'mongodb://localhost:27017/bonniena',
    apiBase: '/api',
    uploadBase: '/upload',

    OSS: {
      region: 'oss-cn-shenzhen', // 自定义项
      accessKeyId: 'LTAIyaBw7R06PSPd', // 自定义项
      accessKeySecret: 'bn4PlObQQjbhBInkuxrNRd3P79dcHQ' // 自定义项
    },

    // 小程序账户
    appid: 'wxcee026337cd578de',
    appsecret: '689ed5600168c7e66f7f13175057592c',

    // 微信商户
    mchid: 1499761962, // 一定要数字
    apikey: '12313131adadsfdasdfDDFEWWWEEE111'
  },
  /*
    ** Headers of the page
    */
  head: {
    // title: 'senboma_bonniena',
    title: 'senboma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        // content: 'Guangzhou Senboma Artware Co., LTD. is a professional manufacturer and exporter that is concerned with the design, development and production of false nails. We are Established in 2 0 1 2, located in Panyu, Guangzhou. All of our products comply with international quality standards and are greatly appreciated in a variety of different markets throughout the world. Covering and area of 5,000 m2, we now have 150 workers, our production capacity is 2 million units per month. By focusing on new technology and new designs creation, we take our clients over 500 new colors and designs false nails to our customers every year. Our well-equipped facilities and excellent quality control throughout all stages of production enables us to guarantee customer satisfaction. Senboma have the G M P certificate. As a professional cosmetics factory, our false nails and nail glue passed S V H C, Heavy Metal, Microbial test and other related tests according the Europe and U S requirements. As a result of our high quality products, new creation designs and outstanding customer service, we have gained a global sales network reaching U K, U S, Europe, Australia, Korea. If you are interested in any of our products or would like to discuss a customized order, please feel free to contact us. We are looking forward to building a mutual beneficial business relationships with new clients around the world in the near future.'
        content: 'description'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      { src: '/script/script.js' }]
  },

  /*
    ** Customize the progress-bar color
    */
  loading: { color: '#FB00C9' },
  // loading: '~/loading/',
  /*
    ** Global CSS
    */
  css: [
    '~/assets/less/index.css'
  ],

  /*
    ** Plugins to load before mounting the App
    */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/global-styles',
    '~/plugins/swiper.client.js',
    '~/plugins/waterfall.client.js',
    '~/plugins/components',
    '~/plugins/module-components',
    '~/plugins/vue-lazyload',
    '~/plugins/axios',
    '~/plugins/filter',
    '~/plugins/inject',
    '~/plugins/vuex-i18n',
    { src: '~/plugins/vue-masonry', mode: 'client' },
    { src: '~/plugins/VueEditor.js', mode: 'client' },
    // vuex持久化
    // "~/plugins/vuex-persistedstate.client.js",
    // test----------------------
    '~/plugins/test'
  ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    //styled css`` 解析
    'styled-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    /* 预先引入到各个vue文件中 */
    less: ['./assets/less/variables.less', './assets/less/mixins/*']
    /*  options: {
            // See https://github.com/yenshih/style-resources-loader#options
            // Except `patterns` property
          } */
  },
  /* axios: {

     prefix: '/api', // baseURL
     credentials: true,
     }, */
  /*
    ** Build configuration
    */
  // 输出配置================================================
  build: {
    postcss: {
      plugins: {
        // Disable `postcss-url`
        /*    'postcss-preset-env': {
              /!* use stage 3 features + css color-mod (warning on unresolved) *!/
              stage: 3,
              features: {
                'color-mod-function': { unresolved: 'warn' }
              }
            },*/
        'postcss-url': true,
        // 下一代语法
        'postcss-nested': {},
        // var变量 $开头
        'postcss-simple-vars': {},

        'postcss-mixins': {},
        // 颜色函数
        'postcss-color-mod-function': {
          // 忽略未解析的color-mod（）函数
          unresolved: 'ignore',
          importFrom: [
            {
              customProperties: {
                // 全局变量
                '--nuxt-config-color': '#ff0000'
              }
            }
          ]
        },
        'postcss-responsive-type': {},
        // rgb半透明渐变
        'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },

    transpile: [/^element-ui/],
    babel: {
      plugins: [['component',
        {
          libraryName: 'element-ui',
          styleLibraryName: '~theme-chalk-master/lib' // 默认css分散包,按需加载,~theme"为element et sass生成工具的目录

        }
      ]]
    },

    loader: {

      fontUrl: { limit: 1000 },
      imgUrl: { limit: 1000 }

    },

    /*
        ** 防止重复打包
        */
    vendor: ['element-ui', '~/plugins/lei-ui', 'vue-lazyload'],
    // build时间可以补充一下loader
    extend (config, ctx) {
      // 为 客户端打包 进行扩展配置
      if (ctx.isClient) {
        console.log('打包时的钩子')
      }
    }
  }
}
