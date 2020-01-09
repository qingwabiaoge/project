require('../db')
const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  // _id: Schema.Types.ObjectId,
  title: { type: String, default: '' }

})

let Tag = mongoose.model('Tag', schema)
module.exports = Tag
