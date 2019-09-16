const Dog = require('../../../model/Dog')
Dog.find({"name": "小黑"}, (err, dogs) => {
  dogs.forEach(item => {
    item.age = 13;
    item.save()
  })

  console.log(dogs)
});
