const Dog = require('../../../model/Dog')
const callback = require('../../callback')


Dog.find({$or: [{name: '小白'}, {name: '小黑'}]}, callback)
