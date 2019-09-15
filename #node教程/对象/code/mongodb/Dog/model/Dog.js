require('../db')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*----------------新建Schema ,类似构造函数 ,this.name=name--------------------------------*/
const schema = new Schema({
  //和vue的属性的配置类似
  name: {type: String, default: 'xxx'},
  //unique 唯一性,需要删除dogs数据库重建
  id: {
    type: Number, unique: true
  },
  age: {type: Number, default: 0},
  type: {type: String, default: '雄'},
  comments: [{body: String, foor: String}],
  date: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  },
  master: {type: Schema.Types.ObjectId, ref: 'Master'}
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
  //this.model('Dog')指的是当前这个类
  this.model('Dog').find({"type": this.type}, callback);
  console.log(this)
}

/*--------------------类的静态方法-----------------------------------*/

schema.statics.findDog = function (name, callback) {
  //this===Dog,   因为Dog.finddog(),对象调用函数 this被赋值Dog
  this.find({name: name}, callback);
};
//创建修改的静态方法
schema.statics.modifyDogAge = function (conditions, age) {
  this.update(conditions, {$set: {"age": age}}, {}, function () {
    console.log("更改成功");
  });
}
/*--------------------建立类--------------------------------------*/
const Dog = mongoose.model('Dog', schema) //两个Dog都是类名，不是数据库名字
module.exports = Dog
