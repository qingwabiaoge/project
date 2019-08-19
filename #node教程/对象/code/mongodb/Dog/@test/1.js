const Dog = require('../model/Dog.js')


async function fn() {
  const i = await Dog.updateMany({name: '小黑'},{$set:{age:53}})
  console.log(i)
}

fn()

async function f() {
  const i = await Dog.find({name: '小黑'})
  console.log(i)
}

f()

