const fs = require('fs');
//读取图片到buffer对象
const pic = fs.readFileSync(new Buffer.from('../assets/1.jpg'),'base64')
console.log(pic)

