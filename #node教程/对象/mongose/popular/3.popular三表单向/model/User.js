const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number

})
const User = mongoose.model('User', userSchema)
module.exports = User
