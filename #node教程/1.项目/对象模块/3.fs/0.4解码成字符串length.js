const str='你好'
console.log(str)
console.log(str.toString('utf-8')) //您好
console.log(str.toString('utf16le')) //你好
console.log(str.toString('base64')) //你好
console.log(str.toString('hex')) //你好




console.log('默认:默认编码是utf-8---------------------')

console.log(Buffer.from(str)) //<Buffer e4 bd a0 e5 a5 bd>
console.log(Buffer.from(str).length)//6
//按照解码成js字符串字节为2和原来的字节相同
console.log(Buffer.from(str).toString('utf-8'))//您好
console.log(Buffer.from(str).toString('utf-8').length)//2
//错误的解码会乱马和原来的字节也不同
console.log(Buffer.from(str).toString('utf16le'))//뷤붥
console.log(new Buffer.from(str,).toString('utf16le').length)//3
//按照base64解码
console.log(new Buffer.from(str).toString('base64'))//5L2g5aW9
console.log(new Buffer.from(str).toString('base64').length)//8


console.log('utf16le---------------------')

console.log(new Buffer.from(str,'utf16le'))//<Buffer 60 4f 7d 59>
console.log(new Buffer.from(str,'utf16le').length) //4
//按照utf16le解码成js字符串字节为2和原来的字节相同
console.log(new Buffer.from(str,'utf16le').toString('utf16le'))//你好
console.log(new Buffer.from(str,'utf16le').toString('utf16le').length)//2
//错误的解码会乱马和原来的字节也不同
console.log(new Buffer.from(str,'utf16le').toString('utf-8'))//`O}Y
console.log(new Buffer.from(str,'utf16le').toString('utf-8').length)//4
//按照base64解码
console.log(new Buffer.from(str,'utf16le').toString('base64'))//YE99WQ==
console.log(new Buffer.from(str,'utf16le').toString('base64').length)//8

console.log('编码成base64不能用---------------------')

console.log(new Buffer.from(str,'base64'))//<Buffer>
console.log(new Buffer.from(str,'base64').length) //0
console.log(new Buffer.from(str,'base64').toString('base64'))
console.log(new Buffer.from(str,'base64').toString('base64'))
//不能用其他编码

/*

console.log(new Buffer.from(str,'base64'))
console.log(new Buffer.from(str,'base64').length)


console.log(new Buffer.from(str,'hex'))
console.log(new Buffer.from(str,'hex').length)
*/
