const mongoose = require('mongoose')
//声明schema
const base = require('./base/base')
const globalSchema = mongoose.Schema({
  ...base,
  producePagerSize: Number,
  articlePagerSize: Number,
  host: String,
  beian: String,
  //全局背景
  bg: String,
  background: String,

  //额外的字段
  ex: {type: Array, default: ['']}


});
//根据schema生成model

const Global = mongoose.model('Global', globalSchema)
module.exports = Global

