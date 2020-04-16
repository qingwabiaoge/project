const {Tag} = require('../../model/')

try {
  async function fn() {
   await Tag.create({
      title: '中国狗'
    })

    await Tag.create({
      title: '美国狗'
    })

    await Tag.create({
      title:'胖狗'
    })

    await Tag.create({
      title: '瘦狗'
    })


  }
  fn()
}
catch (e) {
  console.log(e)
}



