import {i, fn} from './exprort' // i不能被重新赋值,

fn()//i就算是基本类型值,也会随着export.js里的i的值变化而变化

console.log(i) //2
