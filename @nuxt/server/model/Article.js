const mongoose = require('mongoose')
const moment = require('moment')
//声明schema
const articleSchema = mongoose.Schema({
  type:{type:String,default:'atricle'},//数据类型

  title: String,
  subtitle: String,
  info: String,
  description: String,
  content: String,
//seo
  seotitle: String,
  keyword: String,
  //image
  image: String,//图片单张


  //tags
  category: String,
  flag: Boolean,
  tags: [],
//sort
  sort: Number,

//other
  pv: Number,
  create_time: {type: String, default: moment().subtract(10, 'days').calendar()},
  publish: Boolean,

});

//根据schema生成model

const Article = mongoose.model('Article', articleSchema)
module.exports = Article

