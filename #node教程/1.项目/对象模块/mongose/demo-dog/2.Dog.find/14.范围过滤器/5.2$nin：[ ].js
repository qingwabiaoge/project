const Dog = require('../../model/Dog')
const callback = require('../../callback')
// age不是15 20的
Dog.find({ name: 'xiaohua', age: { $nin: [15, 11, 20] } }, callback)
