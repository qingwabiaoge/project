var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var storySchema = Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    // 故事关联人-作者
    author: [{ type: Schema.Types.ObjectId, ref: "Author" }],

});

var Story = mongoose.model("Story", storySchema);
module.exports=Story