import obj from './export.js'

//1.可修改引入方的对象的键值（全局变量）,
obj.a = 10
//2.export.js的函数修改exprot.js的变量（回调函数）
obj.fn()

console.log(obj)


