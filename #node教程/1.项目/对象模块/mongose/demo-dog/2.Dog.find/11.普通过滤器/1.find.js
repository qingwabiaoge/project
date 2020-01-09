const callback = require('../../callback')
const Dog = require('../../model/Dog')

Dog.find({'name': "小白"}, callback)
