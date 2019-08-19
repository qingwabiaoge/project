const callback=require('../callback')

const Dog = require('../../model/Dog')

// Dog.find({name: '小马'} ,callback)
//也不能指定id删除
 Dog.findOneAndRemove( {name:'小马'},callback)