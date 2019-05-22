const qs = require("querystring");

var obj = qs.parse("uname=lilei&upwd=123456");
console.log(obj);


var url = qs.stringify(obj)
console.log(url);