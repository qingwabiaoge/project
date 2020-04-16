const {Dog} = require('../../model/')
const callback = require('../../callback')

let dog = new Dog({
  name: '小白',
  age: 10,
  type: '雌',
  tag:['5e986d7c94c9ab3f88898222']
})
dog.save(callback)
