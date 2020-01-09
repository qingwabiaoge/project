const callback = require('../../callback')

const Dog = require('../../model/Dog')

const i = undefined

Dog.findOne({ name: { $regex: i || '', $options: '$i' } }, callback)
