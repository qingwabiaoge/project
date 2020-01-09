const Dog = require('../../model/Dog')
const callback = require('../../callback')

Dog.find({ age: { $not: { $in: [13, 15] } } }, callback)
