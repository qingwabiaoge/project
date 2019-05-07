const mongoose = require('mongoose')
//声明schema
const globalSchema = mongoose.Schema({
  id: String,
  title: String,
  keyword: String,
  description: String,
  name: String,
  ename: String,//英文名字
  wname: String,
  logo: String,
  image: String,//公司照片
  fileList: [{}],//公司其他图片
  beian: String,//图片单张
  tel: String,
  qq: String,
  address: String,
  map: String,
  background: String,
  qcode: String,//二维码

});
//根据schema生成model

const Global = mongoose.model('Global', globalSchema)
module.exports = Global

