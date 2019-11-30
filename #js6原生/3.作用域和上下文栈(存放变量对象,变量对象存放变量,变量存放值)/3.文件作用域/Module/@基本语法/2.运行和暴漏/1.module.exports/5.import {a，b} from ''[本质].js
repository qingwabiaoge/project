import {a, b} from './module.exports[本质]'
/*本质
const {a, b} = { a: 1, b: 2, default: { a: 1, b: 2 } }
*/

console.log(a, b)


import {a as c, b as d} from './module.exports[本质]'

console.log(c, d)


