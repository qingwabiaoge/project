const Dog = require('../../model/Dog')

const conditions={name:'小花'}; //也不能指定id创建
const update = {name:'小绿',age:20};
const options = {upsert: true};  //默认为false。如果不存在则创建新记录。不用用_id做条件
fn = async () => {
    try {
        const dog = await Dog.updateOne({},update,options)
        console.log(dog)
    } catch (e) {
        console.log(e)
    }
}
fn()

