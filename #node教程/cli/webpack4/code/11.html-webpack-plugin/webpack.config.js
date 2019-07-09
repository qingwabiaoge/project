const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件路径，__dirname是根目录
    entry: __dirname + '/src/',
    // 打包生成文件
    output: {
        path:path.resolve(__dirname, 'dist'),
        // 打包多出口文件
        // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
        filename: './js/[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(), // Generates default index.html
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'My App',
            filename: './assets/admin.html'
        })
    ]
}
