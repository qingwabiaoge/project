const mongoose = require('mongoose')
const Author = require('./model/Author')
const Story = require('./model/Story')

fn = async () => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  })

  const _author = await author.save()
  const story = new Story({
    title: 'Casino Royale',
    author: _author._id    // assign the _id from the person
  })
  story.save()
}

fn()
