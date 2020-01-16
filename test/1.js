const str = 'he'

console.log(str.length)  //2

console.log(new Buffer.from(str,'utf-8').length)//2

console.log(new Buffer.from(str,'utf16le').length)//4

console.log(new Buffer.from(str,'base64').length)//1

console.log(new Buffer.from(str,'hex').length)//0
