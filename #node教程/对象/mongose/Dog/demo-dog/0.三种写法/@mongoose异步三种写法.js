const Dog = require('../model/Dog')
const callback = require('./callback')

/* 回调写法------------------------- */

Dog.find({ name: '小黑' }, callback)

/* promise写法------------------------- */
Dog.find({ name: '小黑' }).then(res => console.log(res)).catch(err => console.log(err))

/* async await写法------------------------- */

fn = async () => {
  try {
    const dogs = await Dog.find({ name: '小黑' })
    console.log(dogs)
  } catch (e) {
    console.log(e)
  }
}
fn()
