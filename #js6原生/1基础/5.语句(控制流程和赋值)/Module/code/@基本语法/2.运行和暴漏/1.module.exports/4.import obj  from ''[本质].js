import obj from './module.exports[本质]'

console.log(obj) //{ a: 1, b: 2 }

/*
*
* const o ={ a: 1, b: 2, default: { a: 1, b: 2 } }
*  obj=(o.default)
*
* */
