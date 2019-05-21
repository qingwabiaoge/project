const Dog = require('../../model/Dog')

const name = new RegExp('小', 'i')

Dog.findOne({name}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
