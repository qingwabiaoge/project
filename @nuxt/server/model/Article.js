const mongoose = require('mongoose')
const moment = require('moment')
//声明schema
const bash = require('./base')
const bashAdd = require('./base-add')
const articleSchema = mongoose.Schema({
  ...bash,
  ...bashAdd
});

//根据schema生成model

const Article = mongoose.model('Article', articleSchema)
module.exports = Article

