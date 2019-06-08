let obj = require('./export-default')
console.log(obj) //{ default: { a: 1, fn: [Function: fn] } }
obj.default.fn()