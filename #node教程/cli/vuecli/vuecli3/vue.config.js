const path = require('path')
// const pluginsConfig = require("./webpack.plguins.js");
// const rulesConfig = require("./webpack.rules.js");
const postcss=require('./postcss.config')
module.exports = {

    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
       // host: "localhost",
        port: "8090",
        //open: true, // 开启浏览器
        hot: true   // 开启热更新
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // css: {
            //     localIdentName: '[name]-[hash]',
            //     camelCase: 'only'
            // }
        },
        // 启用 CSS modules for all css / pre-processor files.


    },



    // 第三方插件配置
    pluginOptions: {},

}