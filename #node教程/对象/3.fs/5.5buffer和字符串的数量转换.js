const  dong='您好，世界！'

console.log(dong.length)  //6
console.log( Buffer.byteLength(dong,'utf8')) //18

console.log( Buffer.byteLength(dong,'utf16le')) //12

console.log( Buffer.byteLength(dong,'base64'))//4

console.log( Buffer.byteLength(dong,'hex'))//3


