const path=require('path')
module.exports = {
    // 入口文件路径，__dirname是根目录
    entry: {
        index:__dirname + '/src/index.js',
        index3:__dirname + '/src/index3.js',
        index4:__dirname + '/src/index4.js'

    },
    // 打包生成文件
    output: {
        path:path.resolve(__dirname, 'dist'),
        // 打包多出口文件
        // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
        filename: './js/[name].bundle.js'
    }
}
