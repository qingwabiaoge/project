// 必须在package.json里加 "browserslist"
module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-cssnext": {}, // 添加此行
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {}
    }
}
