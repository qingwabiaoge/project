const mongoose = require('mongoose')
const { Schema } = mongoose
const base = require('./base')
require('./Component')
const categorySchema = Schema({
  ...base,
  keyword: String,
  seotitle: String,
  //是否顶级
  top: Boolean,
  // -------------标识--------------------
  //name: { type: String, unique: true },  // 组件唯一的标识符,用户通过对象的key访问,unique需要删了当前数据库重新建才能验证
  //parent: {type: String, ref: 'category'},
  // 子模块-----------------------
  children: [{ type: String, ref: 'category' }],
  components: [{ type: String, ref: 'Component' }],//组件标签
  show: Boolean, // 是否显示栏目
})
categorySchema.pre('find', function (next) {
  this.populate('children')
  next()
})
const Category = mongoose.model('category', categorySchema)
module.exports = Category
