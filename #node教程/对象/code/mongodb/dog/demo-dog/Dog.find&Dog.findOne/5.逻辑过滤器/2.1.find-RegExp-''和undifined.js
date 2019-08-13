const callback = require('../../callback')
const Dog = require('../../../model/Dog')

//RegExp可以搜索为空的情况
// const name = new RegExp('', 'i')
const name_ = new RegExp(undefined, 'i')


Dog.find({name: {$regex: ''}}, callback)


//$regex必须是字符串
Dog.find({name}, callback) //结果同上面