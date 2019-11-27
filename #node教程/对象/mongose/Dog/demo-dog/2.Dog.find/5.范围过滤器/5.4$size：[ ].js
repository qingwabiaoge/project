const Dog = require('../../../model/Dog')
const callback = require('../../callback')
// age不是15 20的
Dog.find({ tag: { $size: 2 } }, callback)
