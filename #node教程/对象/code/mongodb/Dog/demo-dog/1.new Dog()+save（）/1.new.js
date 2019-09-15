const Dog = require('../../model/Dog')
const callback=require('../callback')
var dog = new Dog({
    "name": "小马",
    age: 10,
    "type": "雌"
});

dog.save(callback);
