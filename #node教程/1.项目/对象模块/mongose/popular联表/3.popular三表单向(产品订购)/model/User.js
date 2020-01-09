const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  comment: String
})
const User = mongoose.model('User', userSchema)
module.exports = User
