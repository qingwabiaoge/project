const callback = require('../../callback')


const Dog = require('../../../model/Dog')

Dog.updateMany({name: {$not:/黑/}},{$set:{age:10}}, callback)
