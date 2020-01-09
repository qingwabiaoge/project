const callback = require('../../callback')

const Dog = require('../../model/Dog')

// const name = new RegExp('小', 'i')

Dog.findOne({ name: { $regex: '', $options: '$i' } }, callback)
