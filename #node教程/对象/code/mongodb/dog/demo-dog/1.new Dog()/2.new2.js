const Dog = require('../../model/Dog')


fn = async () => {
    var dog = new Dog({
        "name": "小白",
        age: 10,
        "type": "雌"
    });
    dog = await dog.save();
    console.log(dog)
}
fn()