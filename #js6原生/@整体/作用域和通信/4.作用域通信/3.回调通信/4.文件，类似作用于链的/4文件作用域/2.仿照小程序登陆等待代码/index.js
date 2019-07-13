//传入
const obj = require('./obj')


let i
//传入
obj.f1 = function (n) {
    i = n //改变当前作用域的值
    console.log(i)
}

