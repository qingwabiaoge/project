const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//age为10和20的
Dog.find({name: 'xiaohua', age: {$in: [10, 20]}}, callback)


