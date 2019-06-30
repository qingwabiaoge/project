require('../db')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const schema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: {type: String, default: ''},
    age: {type: Number}

})

var Master = mongoose.model('Master', schema)
module.exports = Master