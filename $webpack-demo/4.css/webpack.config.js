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
        rules: [
            // ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.css$/,
                use: [


                    {loader: "style-loader"},//解析css文件成style标签插入到js
                    {loader: 'css-loader'}//可以引入 .css文件
                ]
            },
        ]
    }
}
