const Master = require('../../model/Master')
const Dog = require('../../model/Dog')
var dog = new Dog({
    "name": "Ð¡»¨",
    age: 10,
    "type": "´Æ"
});

dog.save(err => {

    if (err) {
        console.log(err)
    } else {

        const master = new Master({
            name: "Ê¯ÀÚ",
            age: 35

        })

        master.save(
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )

    }

})