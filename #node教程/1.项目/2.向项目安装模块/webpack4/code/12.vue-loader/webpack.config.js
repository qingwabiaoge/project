const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


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

    devServer: {
        //设置基本目录结构,用于找到程序打包地址
        contentBase: path.resolve(__dirname, './dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启

        // compress: true,
        //配置服务端口号
        port: 8888
    },
    //开发模式
    mode: 'development',
    //生产模式
    // mode: 'production',
    resolve: {
        extensions: ['.css', '.js', '.vue'],//自动补全后缀名
        alias: {
            "@": path.resolve("src") //alias替代
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                    ,
                    "postcss-loader"
                ]
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style lang="less">` 块
            {
                test: /\.less$/,
                use: [
                    {loader: "vue-style-loader"},//3解析css文件到style标签
                    {
                        loader: 'css-loader',

                    },//2可以引入 .css文件

                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // 这里配置全局变量
                            globalVars: {
                                'ten': '10px',    // ten可以是ten，也可以是@ten，效果一样，下同
                                'hundred': '100px'
                            }
                        }

                    },
                    {//nuxt就用的这个东西引入全局变量的
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [path.resolve(__dirname, './src/assets/variables.less'),
                                path.resolve(__dirname, './src/assets/mixin.less')],
                            injector: 'append'
                        }
                    }

                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg)/,
                use: [

                    {
                        loader: "url-loader",//url-loader会将引入的图片编码，生成dataURl
                        options: {
                            name: '[name].[ext]',
                            limit: 10 * 1000,
                            outputPath: './img',
                            // publicPath:'http://cdn.baidu.com',//可选项加前缀
                        }, //默认单位为b,
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 10 * 1000,
                        outputPath: './font',
                        // publicPath:'http://cdn.baidu.com',//可选项加前缀
                    }, //默认单位为b,
                }]
            }
        ]
    }
    ,

    plugins: [
        new VueLoaderPlugin()
    ]
}

