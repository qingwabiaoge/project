const Dog = require('../../model/Dog')
const condition=undefined
const name = new RegExp(condition, 'i')

Dog.find({name}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
