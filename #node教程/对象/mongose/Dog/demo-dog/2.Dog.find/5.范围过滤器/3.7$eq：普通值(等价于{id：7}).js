const Dog = require('../../../model/Dog')
const callback = require('../../callback')
//>=18
/*Dog.find({id: 7}, callback)*/

Dog.findOne({name: {$eq: '小花'}}, callback)
