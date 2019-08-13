const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name: 'xiaohua', age: {$nin: [15, 20]}}, callback)


