const a = 1, b = 2
module.exports = {a, b}

/*上面代码在babel-node包装为
*  module.exports = { a: 1, b: 2, default: { a: 1, b: 2 } }
* */
