const Dog=require('../../model/Dog')
/*回调写法-------------------------*/
const cb = (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
}

Dog.find({name: '小黑'}, cb)

/*promise写法-------------------------*/
Dog.find({name: '小黑'}).then(cb)

/*async await写法-------------------------*/

fn = async () => {
    const dogs = await Dog.find({name: '小黑'})
    console.log(dogs)
}
fn()