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
    }
,
    module: {
        rules: [
            // ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.less$/,
                use: [{loader: "style-loader"},//3解析css文件到style标签
                    {loader: 'css-loader'},//2可以引入 .css文件
                    {loader: 'less-loader'}//1先解析less文件成.css文件
                ]
            },
        ]
    }
}
