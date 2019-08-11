import {a, b} from './module.exports'
console.log(a,b)


import {a as c, b as d} from './module.exports'
console.log(c,d)

// b()   //函数运行找不到this