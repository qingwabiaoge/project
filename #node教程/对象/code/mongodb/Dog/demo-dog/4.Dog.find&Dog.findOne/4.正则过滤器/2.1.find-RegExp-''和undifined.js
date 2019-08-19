const callback = require('../../callback')
const Dog = require('../../../model/Dog')

//RegExp可以搜索为空的情况
// const name = new RegExp('', 'i')
const name_ = new RegExp(undefined, 'i')


Dog.find({name: {$regex: ''}}, callback)


//{$regex: '字符串'}所以要用下边的这个
Dog.find({name}, callback) //结果同上面
