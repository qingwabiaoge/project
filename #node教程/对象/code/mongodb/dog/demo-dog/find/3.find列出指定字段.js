const Dog = require('../../model/Dog')

Dog.find({'name': '小花'}, {name:1,age:1},(err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
