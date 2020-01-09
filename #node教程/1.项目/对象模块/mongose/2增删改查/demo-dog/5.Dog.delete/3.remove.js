const callback=require('../callback')

const Dog = require('../model/Dog')

 //也不能指定id删除
Dog.remove( {name:'小绿'},callback)
