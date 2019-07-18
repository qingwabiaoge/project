const Dog = require('../../model/Dog')

Dog.find({'name': '小花'}, {type:0},(err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
