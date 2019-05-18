const Dog = require('../../model/Dog')
//RegExp可以搜索为空的情况
const name = new RegExp('', 'i')


Dog.find({name}, (err, res) => {
    if (!res) {
        console.log('无')
    }
    else {
        console.log(res)

    }

})
