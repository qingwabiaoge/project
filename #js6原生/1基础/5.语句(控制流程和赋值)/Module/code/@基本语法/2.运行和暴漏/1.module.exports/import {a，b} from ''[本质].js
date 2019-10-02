import {a, b} from './module.exports[本质]'

console.log(a, b)

/*本质
const {a, b} = require('./module.exports[本质]')
console.log(a, b)
*/

import {a as c, b as d} from './module.exports[本质]'

console.log(c, d)

// b()   //函数运行找不到this
