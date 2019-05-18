const _ =require('lodash')
const _arr=[{a:1},{a:2},{a:3},{a:1},{a:2},{a:3}]
const arr=_arr.map((item)=>{return item.a})
const i=_.uniq(arr)
console.log(i)
