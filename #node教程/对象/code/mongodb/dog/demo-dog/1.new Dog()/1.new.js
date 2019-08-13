const Dog = require('../../model/Dog')
var dog = new Dog({
    "name": "小马",
    age: 10,
    "type": "雌"
});

dog.save(function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});
