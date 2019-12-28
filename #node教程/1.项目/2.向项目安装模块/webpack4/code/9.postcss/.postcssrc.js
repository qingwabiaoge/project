// 必须在package.json里加 "browserslist"

module.exports = {
  'plugins': {

    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-url': { url: 'copy'},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {}
  }
}
