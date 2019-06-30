require('../../model/Master')

const Dog = require('../../model/Dog')


Dog.findOne({name: 'xiaohua'})
    .populate({path: "master", select: 'name age'})
    .exec(function (err, story) {
        if (err) {
            console.log(err);
            return false
        }
        console.log(story);

    });