const Dog = require('../../../model/Dog.js')


async function fn() {
  const i = await Dog.updateOne({name: '小黑'},{$set:{age:52}})
  console.log(i)
}

fn()
