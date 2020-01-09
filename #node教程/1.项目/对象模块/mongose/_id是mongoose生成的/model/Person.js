const mongoose = require('mongoose')
const { Schema } = mongoose


const schema = new Schema({

})

/* --------------------建立类-------------------------------------- */
const Person = mongoose.model('Person', schema) // 两个Dog都是类名，不是数据库名字
module.exports = Person
