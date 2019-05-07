const mongoose = require('mongoose')
const moment = require('moment')
//声明schema
const articleSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    seotitle: String,
    keyword: String,
    description: String,
    category: String,
    image: String,//图片单张
    content: String,
    flag: String,
    sort: Number,
    tags: [],
    onclick: Number,
    create_time: {type: String, default: moment().subtract(10, 'days').calendar()},
    publish: Boolean,
});

//根据schema生成model

const Article = mongoose.model('Article', articleSchema)
module.exports = Article

