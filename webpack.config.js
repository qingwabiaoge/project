const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.css', '.js', '.vue'], // 自动补全后缀名
    alias: {
      '@': path.resolve('./@@nuxt/'), // 替代目录
      '~': path.resolve('./@@nuxt/') // 替代目录
    }
  }
}
