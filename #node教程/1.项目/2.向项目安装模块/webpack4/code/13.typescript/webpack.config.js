const path = require('path')
module.exports = {
  // 入口文件路径，__dirname是根目录
  entry: __dirname + '/src/',
  // 打包生成文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包多出口文件
    // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
    filename: './js/[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader"
    }]
  }
  ,
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
  resolve: {
    extensions: ['.css', '.js', '.vue','.ts'],//自动补全后缀名
  }
}
