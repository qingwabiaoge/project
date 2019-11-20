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

            {
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
                            publicPath:'http://cdn.baidu.com',//可选项加前缀
                        }, //默认单位为b,


                    },


                ]
            }
        ]
    }
}
