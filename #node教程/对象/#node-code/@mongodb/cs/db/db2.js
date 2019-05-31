//引包
var mongoose = require('mongoose');
//创建一个数据库连接
// mongoose.connect("mongodb://localhost/cheshi");
// let db = mongoose.connection;
// // 防止Mongoose: mpromise 错误
// mongoose.Promise = global.Promise;
//
// db.on('error', function(){
//     console.log('数据库连接出错！');
// });
// db.on('open', function(){
//     console.log('数据库连接成功！');
// });
// module.exports = db;


mongoose.connect('mongodb://localhost/lei', {useNewUrlParser:true}, function(err){
    if(err){
        console.log('Connection Error:' + err)
    }else{
        console.log('Connection success!')
    }
})
