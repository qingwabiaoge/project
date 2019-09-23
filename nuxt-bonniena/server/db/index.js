const config=require('../config.js')
const mongoose = require('mongoose');


// mongoose.connect(config.dataBash);
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
//
//
//
//
// module.exports = db;

mongoose.connect(config.dataBash, {useNewUrlParser:true}, function(err){
    if(err){
        console.log('Mongo Connection Error:' + err)
    }else{
        console.log('Mongo connection success!')
    }
})
