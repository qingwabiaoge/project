const fs = require('fs');

//编码

function base64_encode(file) {
  let bitmap = fs.readFileSync(file);
  //这样也可以,new Buffer.from(bitmap,'base64');
//  return new Buffer.from(bitmap).toString('base64');
  return new Buffer.from(bitmap)
}

//解码

function base64_decode(base64str, file) {
  var bitmap = new Buffer.from(base64str, 'base64');
  fs.writeFileSync(file, bitmap);
}

const base64str = base64_encode('./images/1.png')
console.log(base64str)
base64_decode(base64str, './images/2.png')
