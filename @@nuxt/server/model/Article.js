const mongoose = require('mongoose')
const moment = require('moment')
// 声明schema
const bash = require('./base/base')
const basePageDetail = require('./base/base-article')

const articleSchema = mongoose.Schema({
  ...bash,
  ...basePageDetail
})

// 根据schema生成model

const Article = mongoose.model('Article', articleSchema)
module.exports = Article
