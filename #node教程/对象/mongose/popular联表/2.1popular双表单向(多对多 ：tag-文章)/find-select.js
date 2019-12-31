const Author = require('./model/Author')
const Story = require('./model/Story')

Story.findOne({})
// populate("author"),将搜索另外一个表的作者信息列出来
  .populate({ path: 'author', select: 'name age' })
  .exec((err, story) => {
    if (err) { return handleError(err) }
    console.log(story)
  })
