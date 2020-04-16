const {Dog} = require('../../model/')

try {
  async function fn () {
    for (let i = 1; i < 200; i++) {
      const dog = await Dog.create({
        name: '小花', image: `/images${i}.jpg`, type: '雌', id: i
      })
    }
  }

  fn()
} catch (e) {
  console.log(e)
}
