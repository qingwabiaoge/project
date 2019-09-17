const Dog = require('../../../model/Dog')
const callback = require('../../callback')
// $not与正则表达式联合使用时极为有效，用来查找那些与特定模式不匹配的文档。
Dog.find({name: {$not:/黑/}}, callback)



