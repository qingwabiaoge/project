const obj = require('./export.js')

//1.可修改引入方的对象的键值（全局变量）,
obj.a++

// 2.引入方的函数修改引入方的变量（回调函数）
obj.fn()
