//寻找汤姆猫，将它改为8岁。
const Dog = require('../model/Dog')
const fn = async () => {
  const dog = await Dog.findOne({"name": "小白"});
  dog.age = 16
  dog.save() //save必须带
  console.log(dog)
}

fn()
