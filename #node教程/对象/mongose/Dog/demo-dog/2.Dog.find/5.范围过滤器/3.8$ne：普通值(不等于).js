const Dog = require('../../../model/Dog')
const callback = require('../../callback')
// >=18
Dog.find({ age: { $ne: 10 } }, callback)
