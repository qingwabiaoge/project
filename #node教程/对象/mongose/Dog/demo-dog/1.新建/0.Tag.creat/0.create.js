const Tag = require('../../../model/Tag')

try {
  async function fn () {
    const dog = await Tag.create({
      title: '叮当猫'
    })
    /*  Dog.create({name:'小黑',age:2,type:'雌',id:2})
   const dog=await Dog.create({name:'小白',age:10,type:'雌',id:10,comments:[{body:'....body',foor:'2019-3-1'},{body:'....body',foor:'2019-3-1'}]}) */
    console.log(dog)
  }

  fn()
} catch (e) {
  console.log(e)
}
