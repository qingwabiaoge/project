let i = 10
console.log(`引入方的全局变量i:${i}`) //10

 i = require('./export.js')//在输出方作用域运行,不干扰引入方的作用域

console.log(`引入方的全局变量为i:${i}`) //2