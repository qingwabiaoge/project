const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name: 'xiaohua', age: {$not: {$lte: 11}}}, callback)


