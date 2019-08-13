const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({name: 'xiaohua', age: {$in: [10, 20]}}, callback)


