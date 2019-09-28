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
    //HOST: '47.107.170.105',
    HOST: '127.0.0.1',
    PORT: 3001,
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

  server: {
    user: {
      role: 'administer',
      username: 'a',
      password: 'a',

    },
    adminJwtString: 'qinshilei',
    vipJwtString: 'qinshilei',
    dataBash: 'mongodb://localhost:27017/senboma',
    //dataBash: 'mongodb://localhost:27017/bonniena',
    apiBase: '/api',
    uploadBase: '/upload',

    OSS: {
      region: 'oss-cn-shenzhen', //自定义项
      accessKeyId: 'LTAIyaBw7R06PSPd', //自定义项
      accessKeySecret: 'bn4PlObQQjbhBInkuxrNRd3P79dcHQ' //自定义项
    }
    ,

    // 小程序账户
    appid: 'wxcee026337cd578de',
    appsecret: '689ed5600168c7e66f7f13175057592c',

// 微信商户
    mchid: 1499761962, //一定要数字
    apikey: '12313131adadsfdasdfDDFEWWWEEE111',

    articlePageSize: 15
  },
  /*
  ** Headers of the page
  */
  head: {
    // title: 'senboma_bonniena',
    title: '广州森伯马_穿戴美甲',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        //content: 'Guangzhou Senboma Artware Co., LTD. is a professional manufacturer and exporter that is concerned with the design, development and production of false nails. We are Established in 2 0 1 2, located in Panyu, Guangzhou. All of our products comply with international quality standards and are greatly appreciated in a variety of different markets throughout the world. Covering and area of 5,000 m2, we now have 150 workers, our production capacity is 2 million units per month. By focusing on new technology and new designs creation, we take our clients over 500 new colors and designs false nails to our customers every year. Our well-equipped facilities and excellent quality control throughout all stages of production enables us to guarantee customer satisfaction. Senboma have the G M P certificate. As a professional cosmetics factory, our false nails and nail glue passed S V H C, Heavy Metal, Microbial test and other related tests according the Europe and U S requirements. As a result of our high quality products, new creation designs and outstanding customer service, we have gained a global sales network reaching U K, U S, Europe, Australia, Korea. If you are interested in any of our products or would like to discuss a customized order, please feel free to contact us. We are looking forward to building a mutual beneficial business relationships with new clients around the world in the near future.'
        content: '广州森伯马工艺品有限公司是一家集设计、研发、制造、销售美甲及美甲相关产品的一体性公司，公司成立于2012年3月，位于广州市番禺区大石街涌口工业区，公司以“秉着执着和创新的精神打造国际知名品牌，用服务和质量赢得客户口碑，给员工提供施展平台，把企业成果回馈社会”为经营理念；以“成为美甲行业的领导者”为经营目标；以“追求完美，不断创新，成就手指上的艺术”为质量目标，努力成为一间受到客户和社会认可的专业性美甲产品的国际化公司。 公司拥有自有品牌：SENBOMA和樱柏漫BONNIENA，同时承接OEM,ODM生产。 公司主营产品：塑料指甲贴片，指甲贴膜，指甲贴花，水晶指甲贴，美甲工具，美甲配件等工艺产品。公司建立无尘车间，采用ABS为原材料，运用全自动涂装设备及国际领先的移印丝印设备。我司拥有一批具有多年工作经验的设计研发人员、工程师、销售员及熟手技术人员。我们将以卓越的品质，真诚为广大客户服务。欢迎各界朋友莅临参观、指导和业务洽谈。'
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
    //'~/plugins/swiper.client.js',
    '~/plugins/lei-ui',
    '~/plugins/mixins',
    '~/plugins/vue-lazyload',
    "~/plugins/axios",
    "~/plugins/filter",
    //"~/plugins/vuex-i18n",
    //vuex持久化
    //"~/plugins/vuex-persistedstate.client.js",
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
