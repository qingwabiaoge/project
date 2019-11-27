const mongoose = require('mongoose')
require('./Component')
const { Schema } = mongoose
const bash = require('./base/base')

const categorySchema = Schema({
  seotitle: String,
  ...bash,
  // -------------标识--------------------
  name: { type: String, unique: true },  // 组件唯一的标识符,用户通过对象的key访问,unique需要删了当前数据库重新建才能验证
  parent: Schema.Types.ObjectId,
  // 子模块-----------------------
  children: [{ type: Schema.Types.ObjectId, ref: 'category' }],
  components: [{ type: Schema.Types.ObjectId, ref: 'component' }],//组件标签
  show: Boolean, // 是否显示模块
})

const Category = mongoose.model('category', categorySchema)
module.exports = Category
