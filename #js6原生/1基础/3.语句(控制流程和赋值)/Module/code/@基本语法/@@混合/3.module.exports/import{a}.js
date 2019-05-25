import {a, fn} from './module.exports'

console.log(a,fn)
import {a as c, fn as d} from './module.exports'

console.log(c,d)

// fn()   //函数运行找不到this