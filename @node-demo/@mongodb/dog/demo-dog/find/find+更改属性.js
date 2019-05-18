//寻找汤姆猫，将它改为8岁。
const Dog=require('../../model/Dog')
const fn=async()=>{
    const data= await Dog.find({"name":"小黑"},function(err,result){
        var dog = result[0]; //dog这个变量是一个Dog的实例。为什么？
                                 //因为它是从Dog集合中find出来的，所以find出来之后
                                 //就是Dog的一个实例。
        dog.age = "28";
        dog.save();
        console.log(dog)
    });

}
fn()