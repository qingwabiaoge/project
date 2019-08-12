const Dog = require('../../model/Dog')

Dog.find({'name': "小白"}, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(res)
        console.log(res[0].comments)

    }

})
