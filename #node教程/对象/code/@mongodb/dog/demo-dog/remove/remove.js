const Dog = require('../../model/Dog')
const conditions={name:'小绿'}; //也不能指定id创建
Dog.remove( conditions,function(err, res){
    if(err) console.log(err);
    console.log('删除成功：' + res);
})