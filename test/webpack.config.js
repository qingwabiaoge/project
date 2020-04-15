const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 入口文件路径，__dirname是根目录
  //entry: __dirname + '/src/',
  // 打包生成文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包多出口文件
    // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
    filename: './js/[name].bundle.js'
  },
  resolve: {
    extensions: ['.css', '.js', '.vue'],//自动补全后缀名
    alias: {
      "@": path.resolve("./src") //替代目录
    }
  },
  devServer: {
    //设置基本目录结构,用于找到程序打包地址
    contentBase: path.resolve(__dirname, './dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 8888
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
     
        // ... 其它规则
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }, {
          test: /\.(png|jpg|gif|jpeg)/,
          use: [

              {
                  //url-loader会将引入的图片编码，生成dataURl
                  //url-loader依赖file-loader,在node_moudles中使用file-loader
                  loader: "url-loader",
                  options: {
                      name:'[name].[ext]',
                      limit: 10 * 1000,
                      outputPath:'./img',
                      //publicPath:'http://cdn.baidu.com',//可选项加前缀
                  }, //默认单位为b,


              },


          ]
      }
    ]
  }
  ,
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
