const a=1
const b=2
export {a,b}

/* 等价写法
export const a=1
export const b=2

*/

/*
本质被babel-node转化为
module.export={a:1,b:2 }
 */
