const a = 1, b = 2
export default {a, b}

/*上面代码被babel-node 封装为

  module.exports={default:{a:1,b:2}}

*/

