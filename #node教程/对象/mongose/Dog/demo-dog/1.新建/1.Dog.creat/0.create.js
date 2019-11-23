const Dog = require('../../../model/Dog')

try {
  async function fn () {
    const dog = await Dog.create({
      name: '小花', age: 1, type: '雌', id: 19, tag: ['5dd927451e520b21f0035d9a', '5dd929a58fb4be0f28b9a420']
    })
    console.log(dog)
  }

  fn()
} catch (e) {
  console.log(e)
}
