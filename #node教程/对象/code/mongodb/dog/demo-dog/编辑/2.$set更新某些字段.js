const callback = require('../callback')


const Dog = require('../../model/Dog')
const conditions = {name: '小黑'}; //也不能指定id创建
const update = {$set: {age: 100}};

Dog.update(conditions, update, callback)

