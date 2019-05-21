require('../db')
const mongoose = require('mongoose')

/*----------------新建Schema ,类似构造函数 ,this.name=name--------------------------------*/
const schema = new mongoose.Schema({
    name: {type: String, default: 'xxx'},
    id: {type: Number, unique: true, ropDups: true},
    age: {type: Number, default: 0},
    type: {type: String, default: '雄'},
    comments: [{body: String, foor: String}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
/*-------------------实例化对象的方法 ,类似protype---------------------------------------*/
//this我实例化对象
schema.methods.showInfo = function () {

    console.log(this.name, this.type);

}
//发表评论
schema.methods.comment = function (obj) {
    this.comments.push(obj);
    this.save();
}
schema.methods.addOneAge = function () {
    this.age++;
    this.save();
}
schema.methods.findClass = function (callback) {
    this.model('Dog').find({"type": this.type}, callback);
    console.log(this)
}

/*--------------------类的静态方法-----------------------------------*/
//this.model('Dog')指的是当前这个类
schema.statics.findDog = function (name, callback) {
    this.find({name: name}, callback);
};
//创建修改的静态方法
schema.statics.modifyDog = function (conditions, update, options, callback) {
    this.update(conditions, update, options, callback);
}
/*--------------------建立类--------------------------------------*/
const Dog = mongoose.model('Dog', schema) //两个Dog都是类名，不是数据库名字
module.exports = Dog