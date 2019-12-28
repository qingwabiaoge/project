const path = require('path')
module.exports = {
    // 入口文件路径，__dirname是根目录
    entry: {
        js0: __dirname + '/src/js1.js',
        js1: __dirname + '/src/js1.js',
        js2: __dirname + '/src/js2.js',
        js3: __dirname + '/src/js3.js',
        img: __dirname + '/src/img.js'

    },

    module: {
        rules: [

            {
                test: /\.(png|jpg|gif|jpeg)/,
                use: [

                    {
                        //url-loader会将引入的图片编码，生成dataURl
                        //url-loader在node_moudles中使用file-loader
                        loader: "url-loader",
                        options: {
                            name: '[name].[ext]',
                            limit: 10 * 1000,
                            outputPath: './img',
                            //可选项加前缀
                           // publicPath: 'http://cdn.baidu.com',
                        }, //默认单位为b,


                    },


                ]
            }
        ]
    },
    // 打包生成文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包多出口文件
        // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
        filename: './js/[name].bundle.js'
    }
}
