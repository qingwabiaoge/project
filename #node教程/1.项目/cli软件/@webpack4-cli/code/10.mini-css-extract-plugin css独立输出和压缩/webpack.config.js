
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
  plugins: [
    //建立MiniCssExtractPlugin对象用于loader
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  //optimization[英:优化],
  // optimization替代webpack的默认处理选项
  optimization: {
    //允许你通过提供一个或多个实例，覆盖默认压缩工具(minimizer)。
    minimizer: [
      /*
uglifyJsPlugin 用来对js文件进行压缩，从而减小js文件的大小，加速load速度。
uglifyJsPlugin会拖慢webpack的编译速度，所有建议在开发简单将其关闭，部署的时候再将其打开。
*/
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
}
