const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name:'xiaohua',age: {$lt: 10}}, callback)
