const Dog = require('../../model/Dog')
const callback = require('../../callback')
//>10
Dog.find({age: {$gt: 10}}, callback)
