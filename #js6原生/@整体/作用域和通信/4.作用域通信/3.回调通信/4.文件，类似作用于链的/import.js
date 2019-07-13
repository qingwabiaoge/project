//向文件作用域2引入i,fn
import {i, fn} from './export'

const n = i + 1
//输出n
fn(n)