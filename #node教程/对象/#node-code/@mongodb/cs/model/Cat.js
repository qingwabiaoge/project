const mongoose = require('mongoose')
require('../db')
var Schema = mongoose.Schema;
const schema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, default: 'xxx'},
    age: {type: Number, default: 0},
    comments: [{title: String, body: String}],

})
schema.methods.findClass = function (callback) {
    this.model('Cat').find({'type': this.type}, callback)
}
schema.methods.comment = function (title, body) {
    this.comments.push({title, body})
}


const Cat = mongoose.model('Cat', schema)
module.exports = Cat