const Dog = require('../../../model/Dog')
const callback = require('../../callback')
Dog.find({$where:"this.age<=10"},function(err,docs){
  console.log(docs);
})
