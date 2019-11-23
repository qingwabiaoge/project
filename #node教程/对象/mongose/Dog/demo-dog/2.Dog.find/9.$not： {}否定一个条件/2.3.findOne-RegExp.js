const callback = require('../../callback')

const Dog = require('../../../model/Dog')

Dog.findOne({ name: { $not: { $regex: '黑', $options: '$i' } } }, callback)
