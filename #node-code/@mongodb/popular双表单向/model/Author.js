require('../db')
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,

});
var Author = mongoose.model("Author", personSchema);
module.exports=Author