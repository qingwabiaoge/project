module.exports = {
  //nuxt并没有用这个host和port这是我从server复制过来的
  //server和axios api用这个host和port
  env: {
    // HOST: process.env.HOST ,
    //1.process.env.HOST为了dev测试环境用,测试环境package.json中设置临时的环境HOST变量
    //2."47.107.170.105"是服务器为了打包事设置axios的host地址,此时process.env.HOST并没有值
    //3.上传到服务器上process.env.HOST会获得服务器的ip地址
    HOST: process.env.HOST||"47.107.170.105",
    // PORT: process.env.PORT||3003
    PORT: 3000

  },

  mode: 'universal',
  router: {
    linkActiveClass: 'active',//当前流和上级栏目
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '艺术涂料_乳胶漆_水性涂料_硅藻泥_无机涂料',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'BEST百事得成立于2005年，位于意大利Viadana-维亚达纳，作为房屋内部装饰涂料品牌，百事得bset着重于提高对人体居住环境的健康性，舒适性而努力。在意大利本土拥有1600家销售网点，产品涵盖了艺术涂料、内外墙建筑涂料、木器漆以及全线的民用涂料产品。'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ], script: [
      {src: '/script/baidu.js'}]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#DFBC80'},

  /*
  ** Global CSS
  */
  css: ['~/assets/less/all/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/element-ui', '~/plugins/lei-ui', '~/plugins/vue-lazyload', '~/plugins/filter.js'],
  /*
  ** Nuxt.js modules
  */
  modules: [],

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


    styleResources: {
      /*预先引入到各个vue文件中*/
      less: ['./assets/less/variables.less', './assets/less/leiui/mixins/_mixins.less'],
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

    }
  }

}
