const {Dog} = require('../../model/')

try {
  async function fn () {
    const dog = await Dog.create({
      name: '小花', age: 1,  tag: ['5e986d7a94c9ab3f88898220', '5e986d7c94c9ab3f88898222']
    })
    console.log(dog)
  }

  fn()
} catch (e) {
  console.log(e)
}
