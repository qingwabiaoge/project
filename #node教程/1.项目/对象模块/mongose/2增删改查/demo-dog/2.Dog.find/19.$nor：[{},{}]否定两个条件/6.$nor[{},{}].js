const Dog = require('../../model/Dog')
const callback = require('../../callback')

// 名字不等于小白,并且age不小于等于14
Dog.find({ $nor: [{ name: '小白' }, { age: { $lte: 14 } }] }, callback)
