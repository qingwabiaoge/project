const path = require('path')
module.exports = {
    // 入口文件路径，__dirname是根目录
    entry: {
        index: __dirname + '/src/index.js',


    },
    // 打包生成文件
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: './js/[name].bundle.js'
    }
}
