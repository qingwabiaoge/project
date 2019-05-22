require('../db')
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var authorSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    // 作品id
    stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

var Author = mongoose.model("Author", authorSchema);

module.exports=Author