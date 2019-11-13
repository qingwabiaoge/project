const Dog = require('../../../model/Dog')

try {
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

} catch (e) {
  console.log(e)
}
