const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name:'xiaohua',age: {$gte: 18}}, callback)
