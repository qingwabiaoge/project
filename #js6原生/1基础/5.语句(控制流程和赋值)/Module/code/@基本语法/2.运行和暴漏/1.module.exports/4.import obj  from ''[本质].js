import obj from './module.exports[本质]'

console.log(obj) //{ a: 1, b: 2 }

const obj2=require('./module.exports[本质]')
console.log(obj2)

/*
*
* const o =require( './export-default')
*  obj=(o.default)
*
* */
