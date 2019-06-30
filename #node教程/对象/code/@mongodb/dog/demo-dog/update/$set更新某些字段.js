
const Dog=require('../../model/Dog')
const conditions={name:'小黑'}; //也不能指定id创建
const update = {$set:{age:100}};

fn = async () => {
    try {
        const dog = await Dog.update(conditions,update)
        console.log(dog)
    } catch (e) {
        console.log(e)
    }
}
fn()

