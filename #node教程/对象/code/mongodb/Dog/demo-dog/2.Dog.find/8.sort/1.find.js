const callback = require('../../callback/')

const Dog = require('../../../model/Dog')
Dog.find({}, callback).sort('age -id')
