//寻找汤姆猫，将它改为8岁。
const Dog = require('../model/Dog')

Dog.findOne({"name": "小黑"}, (err, dog) => {
  dog.comments.push({body: '评论body1', data: new Date()})
  //dog.save()
  console.log(dog)
});



