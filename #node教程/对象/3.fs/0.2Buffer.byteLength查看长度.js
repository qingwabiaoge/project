const str = '您好，世界！'

console.log(str.length)  //6


console.log(Buffer.byteLength(str, 'utf8')) //18

console.log(Buffer.byteLength(str, 'utf16le')) //12

console.log(Buffer.byteLength(str, 'base64'))//4

console.log(Buffer.byteLength(str, 'hex'))//3

