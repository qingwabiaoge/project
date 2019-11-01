const mongoose = require('mongoose')
//声明schema
const contactSchema = mongoose.Schema({
  type: {type:String,default:'contact'},
  image: String,//公司照片
  beian: String,//图片单张
  tel: String,
  qq: String,
  email: String,
  address: String,
  map: String,
  qcode: String//二维码

});
//根据schema生成model

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact

