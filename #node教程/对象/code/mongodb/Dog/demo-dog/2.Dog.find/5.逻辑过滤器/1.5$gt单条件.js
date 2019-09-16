const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name:'xiaohua',age: {$gt: 10}}, callback)
