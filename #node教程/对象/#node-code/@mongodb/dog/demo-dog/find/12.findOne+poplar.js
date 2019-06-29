const Dog = require('../../model/Dog')



Dog.findOne({name:'八公'}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
