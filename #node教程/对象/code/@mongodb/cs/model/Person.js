const mongoose = require('mongoose')
require('../db')
var Schema = mongoose.Schema;
const schema = new Schema({
    name: {type: String, default: 'xxx'},
    phone: {type: Number, default: ''},
    cat: { type: Schema.Types.ObjectId, ref: "Cat" },

})
const Person = mongoose.model('Person', schema)

module.exports = Person