const Tag = require('../../../model/Tag')
const Dog = require('../../../model/Dog')

const tag = new Tag({
  name: 'shilei',
  age: 35

})

tag.save((err) => {
  if (err) {
    console.log(err)
  } else {
    let dog = new Dog({
      name: '八公',
      age: 10,
      type: '雌',
      tag: tag._id
    })

    dog.save(
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
  }
})
