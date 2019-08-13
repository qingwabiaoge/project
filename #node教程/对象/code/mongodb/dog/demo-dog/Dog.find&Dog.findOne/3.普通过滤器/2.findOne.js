const callback = require('../../callback')
const Dog = require('../../../model/Dog')

Dog.findOne({"name": '小黑'},  callback)