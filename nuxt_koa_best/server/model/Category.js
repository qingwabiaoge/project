const mongoose = require('mongoose')

//声明schema
const categorySchema = mongoose.Schema({
  title: String,
  subtitle: String,
  seotitle: String,
  keyword: String,
  description: String,
  upCategory: String,
  image: String,//图片单张
  phoneImgurl: String,//图片单张
  icon: String,
  content: String,
  sort: Number,
  route: String,
  publish: Boolean,//显示隐藏栏目
});

//根据schema生成model

const Category = mongoose.model('Category', categorySchema)
module.exports = Category

