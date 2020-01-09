const callback = require('../../callback')

const Dog = require('../../model/Dog')

Dog.find({ tag: '5dd927451e520b21f0035d9a' }).exec(callback)
