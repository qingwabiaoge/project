const mongoose = require('mongoose')

const { Schema } = mongoose
const bash = require('./base/base')

const componentSchema = Schema({
  ...bash,
  // -------------标识--------------------

  name: { type: String, unique: true },  // 组件唯一的标识符,用户通过对象的key访问,unique需要删了当前数据库重新建才能验证
  top: Boolean,  // 是否为顶级栏目
  parent: Schema.Types.ObjectId,
  // 子模块-----------------------
  children: [{ type: Schema.Types.ObjectId, ref: 'component' }],
  // background-------------------
  background: String,
  bg: String,
  // 联系我们附加字段---------------------------------
  tel: String,
  fax: String,
  qq: String,
  email: String,
  address: String,
  map: String,
  qcode: String, // 二维码
  mark:String,//组件标签
  // 开关----------------
  isCategory: Boolean,
  show: Boolean, // 是否显示模块
  // fullpage:Boolean,

  // 做活动的时间段-----------------------
  starttime: Date,
  endtime: Date

})

const Component = mongoose.model('component', componentSchema)
module.exports = Component
