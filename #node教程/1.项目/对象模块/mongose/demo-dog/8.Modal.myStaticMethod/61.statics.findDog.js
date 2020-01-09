const Dog=require('../model/Dog')
Dog.findDog("小黑",function(err,result){
    console.log(result);
});
