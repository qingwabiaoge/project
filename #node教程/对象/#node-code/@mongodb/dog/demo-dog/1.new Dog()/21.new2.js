const Master = require('../../model/Master')
const Dog = require('../../model/Dog')

const master = new Master({
    name: "shilei",
    age: 35

})

master.save(err => {

    if (err) {
        console.log(err)
    } else {

        var dog = new Dog({
            "name": "八公",
            age: 10,
            "type": "雌",
            master: master._id
        });


        dog.save(
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )

    }

})