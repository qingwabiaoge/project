const mongoose = require('mongoose')
const Author = require('./model/Author')
const Story = require('./model/Story')

fn = async () => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  })

  _author = await author.save()

  const story = new Story({
    _id: new mongoose.Types.ObjectId(),
    title: 'Casino Royale',
    author: _author._id    // assign the _id from the author
  })

  const _story = await story.save()

  _author.stories.push(_story._id)
  _author.save()
}

fn()
