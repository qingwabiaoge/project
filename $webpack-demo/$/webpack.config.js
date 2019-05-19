const path = require('path')
module.exports = {
    entry:
        {
            index:__dirname + '/src/index.js',
            main:__dirname + '/src/main.js',

        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包多出口文件
        // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.css$/,
                use: [


                    {loader: "style-loader"},//解析css文件成style标签插入到js
                    {loader: 'css-loader'}//可以引入 .css文件
                ]
            },
            {
                test: /\.less$/,
                use: [{loader: "style-loader"},//3解析css文件到style标签
                    {loader: 'css-loader'},//2可以引入 .css文件
                    {loader: 'less-loader'}//1先解析less文件成.css文件
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)/,
                use: [{
                    loader: "url-loader",//url-loader会将引入的图片编码，生成dataURl
                    options: {limit:1*1000,
                        outputPath:'./img',
                        //publicPath:'http://cdn.baidu.com',//可选项加前缀


                    }, //默认单位为b,


                },


                ]
            }
        ]
    },
    resolve: {
        extensions:['.css','.js','.vue'],//自动补全后缀名
        alias: {
            "@": path.resolve("./src") //替代目录
        }
    },

    devServer:{
    //设置基本目录结构,用于找到程序打包地址
    contentBase:path.resolve(__dirname,'./dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'127.0.0.1',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8888
}
}