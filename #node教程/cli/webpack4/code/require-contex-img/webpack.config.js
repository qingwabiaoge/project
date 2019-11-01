const path = require('path')
module.exports = {
  // 入口文件路径，__dirname是根目录
  entry: {
    index: __dirname + '/src/index.js',


  },
  // 打包生成文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包多出口文件
    // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
    filename: './js/[name].bundle.js'
  }
}
