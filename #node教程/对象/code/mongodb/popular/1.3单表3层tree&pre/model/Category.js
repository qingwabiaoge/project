const mongoose = require('mongoose');

const Schema = mongoose.Schema
const schmema = new Schema({

    title: String,
    parent: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    children: [{type: Schema.Types.ObjectId, ref: 'Category'}]
})

schmema.pre('find', function (next) {
    this.populate('children')
    next()
})
const Category = mongoose.model('Category', schmema)
module.exports = Category