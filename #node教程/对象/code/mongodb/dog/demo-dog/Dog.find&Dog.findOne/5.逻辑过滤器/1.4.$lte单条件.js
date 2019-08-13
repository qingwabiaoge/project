const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name:'xiaohua',age: {$lte: 18}}, callback)
