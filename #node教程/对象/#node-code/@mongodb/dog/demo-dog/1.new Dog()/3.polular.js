const Master = require('../../model/Master')
const Dog = require('../../model/Dog')
var dog = new Dog({
    "name": "С��",
    age: 10,
    "type": "��"
});

dog.save(err => {

    if (err) {
        console.log(err)
    } else {

        const master = new Master({
            name: "ʯ��",
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