const mongoose = require('mongoose')
const Author = require('./model/Author')
const Story = require('./model/Story')

let author = new Author({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
})

author.save((err) => {
  if (err) { return handleError(err) }

  let story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person
  })

  story1.save((err) => {
    if (err) { return handleError(err) }
    // thats it!
  })
})
