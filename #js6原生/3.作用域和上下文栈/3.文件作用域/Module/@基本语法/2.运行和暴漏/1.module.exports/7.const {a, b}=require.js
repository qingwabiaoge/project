const {a,b,fn}=require('./module.exports')
console.log(a,b)

import obj from'./module.exports'
fn.call(obj)
