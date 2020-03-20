const fs = require('fs');

//读取图片创建buffer对象
const pic = fs.readFileSync('../assets/1.jpg')
console.log(pic)
//转成base64字符串可以在浏览器里直接使用
console.log(pic.toString('base64'))



//读取buffer对象
const pic2 = fs.readFileSync(new Buffer.from('../assets/1.jpg'),'base64')
console.log(pic2)

