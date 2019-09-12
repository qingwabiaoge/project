const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
          hash.update('Hello, world!');
          hash.update('Hello, nodejs!');
const res=hash.digest('hex')
//md5加密不能被解密
console.log(res); // 7e1977739c748beac0c0fd14fd26a544
