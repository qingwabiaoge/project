const {Dog} = require('../model')
const callback = require('../callback')

//参数1不能是空对象{}


Dog.find( callback)


Dog.find().then(res => console.log(res)).catch(err => console.log(err))


async function fn() {
  try {

    const dogs = await Dog.find()
    console.log(dogs)
  } catch (e) {
    console.log(e)
  }

}

fn()


