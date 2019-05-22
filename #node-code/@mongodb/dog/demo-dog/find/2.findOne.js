const Dog = require('../../model/Dog')
fn = async () => {
  const dog=await  Dog.findOne({},{_id:0},)
    console.log(dog)
}
fn()
