const mongoose = require('mongoose')
//声明schema
const globalSchema = mongoose.Schema({
  type: {type:String,default:'global'},

  title: String,
  subtitle: String,
  info: String,
  description: String,
  content: String,
//seo
  seotitle: String,
  keyword: String,
  //image
  image: String,//公司照片


  //other

  goodsPagerSize:Number,
  newsPagerSize:Number,


  beian: String,
  background: String,
  background2: String,
  background3: String,


});
//根据schema生成model

const Global = mongoose.model('Global', globalSchema)
module.exports = Global

