const callback = require('../../callback')
const Dog = require('../../model/Dog')
//对象写法
userModel.find(null,null,{ limit:2, skip:1, sort:'-createBy.createTime'},callback)

