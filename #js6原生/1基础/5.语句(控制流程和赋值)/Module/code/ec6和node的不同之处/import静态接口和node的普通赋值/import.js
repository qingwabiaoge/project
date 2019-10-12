/*

i是接口不是普通的赋值,
就算i就算是基本类型值,也会随着export.js里的,i的值变化而变化,
i不能在import.js里被改变
*/

import {i, fn} from './exprort'

fn()//改变i值
console.log(i)//2
