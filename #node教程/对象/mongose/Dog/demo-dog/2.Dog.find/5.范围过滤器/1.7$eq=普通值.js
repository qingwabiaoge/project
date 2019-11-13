const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//>=18
Dog.find({id: {$eq: 7}}, callback)
