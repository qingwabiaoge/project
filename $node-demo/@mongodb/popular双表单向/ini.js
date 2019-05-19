const mongoose=require('mongoose')
const Author=require('./model/Author')
const Story=require('./model/Story')

var author = new Author({
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
});

