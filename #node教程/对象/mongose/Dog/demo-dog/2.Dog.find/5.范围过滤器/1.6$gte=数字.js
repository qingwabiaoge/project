const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//>=18
Dog.find({name:'xiaohua',age: {$gte: 18}}, callback)
