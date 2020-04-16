const Dog = require('../../model/Dog')
const callback = require('../../callback')

Dog.find({ $where: 'this.age === this.id' }, (err, docs) => {
  // [ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
  // { _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
  console.log(docs)
})
