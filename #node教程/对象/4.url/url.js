let url = require('url')

let u = 'http://www.baidu.com/index.html?name=lilei'

let obj = url.parse(u)
console.log(obj)
