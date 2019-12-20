import obj from './module.exports[本质]'

console.log(obj) //{ a: 1, b: 2 }

/*
等价于引入default
* const {default} ={ a: 1, b: 2, default: { a: 1, b: 2 } }
  const obj=defult
* */
