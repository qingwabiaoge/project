const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
// 声明schema

const base = require('./base')
const addition = require('./base/addition')
const articleSchema = mongoose.Schema({
  //seo
  ...base,
  ...addition
})

// 根据schema生成model

const Article = mongoose.model('Article', articleSchema)
module.exports = Article
