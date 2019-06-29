const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const schema = new Schema({

    name: {type: String, default: ''},
    age: {type: Number}

})

const Master = mongoose.model('Master', schema)
module.exports = Master