const router = require('koa-router')()
// 引入模块
const mongoose = require('mongoose')
const dburl = require('../server/config/index')

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})
router.get('/bar1', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/zhuche', function (ctx, next) {
    // 连接数据库
  const  db = mongoose.createConnection(dburl);
// 设置数据类型
    var monSchema = new mongoose.Schema({
        name: {type: String, default: "username"},
        password: {type: Number},
    });
// 选择集合
    var monModel = db.model('users', monSchema);
// 数据集
    var content = {name: user, password: password};
    var field = {name:1,age:1,sex:1};
    monModel.find(content,field,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
        index.close();
    });
    ctx.body = ''
})
router.post('/zhuche', function (ctx, next) {

    let password = ctx.request.body.password
    let user = ctx.request.body.user
    ctx.body = "收到" + user + "-" + password

// 连接数据库
    var db = mongoose.createConnection(dburl);
// 设置数据类型
    var monSchema = new mongoose.Schema({
        name: {type: String, default: "username"},
        password: {type: Number},
    });
// 选择集合
    var monModel = db.model('users', monSchema);
// 数据集
    var content = {name: user, password: password};
// 实例化对象并插入数据
    var monInsert = new monModel(content);
    monInsert.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('成功插入数据');
        }
        db.close();
    });


})


module.exports = router
