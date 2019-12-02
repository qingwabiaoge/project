//传入
const obj = require('./obj')



obj.f = function (n) {//向当前作用域引入n
    console.log(n)
}

