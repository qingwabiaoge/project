const Dog=require('../../model/Dog')
Dog.findOne({"name": "小黑"}, function (err, result) {//返回寻找对象
    if (!result) {
        console.log('没有找到')
    }
    else {
        const dog = result;
        dog.zhangyisui(function (err, result) {
            console.log(result);
        } );
        console.log(dog)

    }
});