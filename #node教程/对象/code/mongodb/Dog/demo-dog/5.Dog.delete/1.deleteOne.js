const callback=require('../callback')

const Dog = require('../../model/Dog')


Dog.deleteMany( {name:'xiaohua'},callback)
