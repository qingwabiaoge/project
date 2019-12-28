const fs = require('fs');
//读取图片到buffer对象
const pic = fs.readFileSync('../assets/1.jpg')
console.log(pic)
//转成base64字符串可以在浏览器里直接使用
const str = pic.toString('base64');
console.log(str)

