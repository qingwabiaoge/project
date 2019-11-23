const qs = require('querystring')

var obj = qs.parse('uname=lilei&upwd=123456')
console.log(obj)

let url = qs.stringify(obj)
console.log(url)

// json--------------

let json = JSON.stringify(obj)
console.log(json)

var obj = JSON.parse(json)
console.log(obj)
