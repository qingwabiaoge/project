const str = '您好'

console.log(str.length)  //2

console.log(new Buffer.from(str,'utf-8').length)//6

console.log(new Buffer.from(str,'utf16le').length)//4

console.log(new Buffer.from(str,'base64').length)//0

console.log(new Buffer.from(str,'hex').length)//0
