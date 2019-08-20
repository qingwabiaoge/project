const Dog = require('../model/Dog.js')
const callback = require('./callback')
//
// async function fn() {
//   const i = await Dog.updateMany({name: '小黑'},{$set:{age:53}})
//   console.log(i)
// }
//
// fn()


async function remove() {
  const i = await Dog.remove({name: '小绿'})
  console.log(i)
}

//
remove()


async function f() {
  const i = await Dog.find({name: '小绿'})
  console.log(i)
}

//
 f()

