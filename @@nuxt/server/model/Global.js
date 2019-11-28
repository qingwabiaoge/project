const mongoose = require('mongoose')
//声明schema
const base = require('./base')
const globalSchema = mongoose.Schema({
  ...base,
  indexProduceNumber:Number,
  producePagerNumber: Number,
  articlePagerNumber: Number,
  cnhost: String,
  enhost: String,
  beian: String,
  //全局背景
  bg: String,
  background: String,
  tel: String,
  fax: String,
  qq: String,
  email: String,
  address: String,
  map: String,
  qcode: String, // 二维码

  //额外的字段
  ex: {type: Array, default: ['']}


});
//根据schema生成model

const Global = mongoose.model('Global', globalSchema)
module.exports = Global

