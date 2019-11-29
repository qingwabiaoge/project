let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cheshi')
let { Schema } = mongoose

let personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  // 作品id
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
})

let storySchema = Schema({
  title: String,
  // 故事关联人-作者
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  // 故事关联人-爱好者
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
})

let Story = mongoose.model('Story', storySchema)
let Person = mongoose.model('Person', personSchema)
/*

var author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});

author.save(function (err) {
    if (err) return handleError(err);

    var story1 = new Story({
        title: 'Casino Royale',
        author: author._id    // assign the _id from the person
    });

    story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
    });
}); */

Story.findOne({ title: 'Casino Royale' })
  .populate('author')
  .exec((err, story) => {
    if (err) { return handleError(err) }
    console.log(story)
    // prints "The author is Ian Fleming"
  })
