const Dog=require('../../model/Dog')
Dog.modifyDog({"name":"小黑"},{$set : {"age":30}},{},function(){
    console.log("改年龄成功");
});