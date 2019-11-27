const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//<=10
Dog.find({name:'xiaohua',age: {$lte: 18}}, callback)
