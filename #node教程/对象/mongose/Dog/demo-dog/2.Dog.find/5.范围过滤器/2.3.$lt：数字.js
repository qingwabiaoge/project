const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//,10
Dog.find({name:'xiaohua',age: {$lt: 10}}, callback)
