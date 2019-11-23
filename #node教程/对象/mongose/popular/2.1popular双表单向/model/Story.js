const mongoose = require('mongoose')

let { Schema } = mongoose
const storySchema = Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' }  // 1关联作者,可以{author:['作者id']}搜索文章, 2可以通过  .populate("author")显示作者信息

})

const Story = mongoose.model('Story', storySchema)
module.exports = Story
