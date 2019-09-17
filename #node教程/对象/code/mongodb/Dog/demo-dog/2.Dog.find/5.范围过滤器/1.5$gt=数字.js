const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//>10
Dog.find({name:'xiaohua',age: {$gt: 10}}, callback)
