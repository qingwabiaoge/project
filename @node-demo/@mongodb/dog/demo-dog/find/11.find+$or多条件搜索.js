const Dog = require('../../model/Dog')

const name = new RegExp('', 'i')
const name2 = new RegExp('', 'i')

Dog.find({$or: [{name},{name:name2}]}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
