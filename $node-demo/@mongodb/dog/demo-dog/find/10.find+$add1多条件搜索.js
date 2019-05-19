const Dog = require('../../model/Dog')

const name = new RegExp('白', 'i')
const name2 = new RegExp('小', 'i')

Dog.find({$and: [{name},{name:name2}]}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
