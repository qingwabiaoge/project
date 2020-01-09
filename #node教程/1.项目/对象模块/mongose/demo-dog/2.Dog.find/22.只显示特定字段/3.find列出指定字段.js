const callback = require('../../callback')

const Dog = require('../../model/Dog')


Dog.findOne({}, {name: 1, age: 1}, callback)
