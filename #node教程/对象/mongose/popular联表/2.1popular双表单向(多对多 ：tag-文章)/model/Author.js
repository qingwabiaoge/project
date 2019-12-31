require('../db')
let mongoose = require('mongoose')

let { Schema } = mongoose

let personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number

})
let Author = mongoose.model('Author', personSchema)
module.exports = Author
