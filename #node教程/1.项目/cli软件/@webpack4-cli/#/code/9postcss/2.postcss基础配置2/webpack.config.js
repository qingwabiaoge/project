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
        use: ["style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(),//添加前缀
                require('postcss-cssnext')(),//添加前缀 转换css未来语法
                /*cssnano是PostCSS的CSS优化和分解插件。cssnano采用格式很好的CSS，并通过许多优化，以确保最终的生产环境尽可能小。*/
                require('cssnano')({
                  preset: 'default'
                }),
              ]
            }
          },]
      },
    ]
  }
}
