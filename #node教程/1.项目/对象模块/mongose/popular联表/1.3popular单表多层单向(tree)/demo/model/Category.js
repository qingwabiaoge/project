const mongoose = require('mongoose')

const {Schema} = mongoose
const schmema = new Schema({
  title: String,
  top: {type: Boolean, default: false},
  children: [{type: Schema.Types.ObjectId, ref: 'Category'}]
})

schmema.pre('find', function (next) {
  this.populate('children')
  next()
})
const Category = mongoose.model('Category', schmema)
module.exports = Category
