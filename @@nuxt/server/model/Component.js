const mongoose = require('mongoose')
const { Schema } = mongoose
const base = require('./base')
const componentSchema = Schema({

  // -------------标识--------------------
  // background-------------------
  ...base,
  background: String,
  bg: String,
  // 是否反色-----
  inverse: Boolean,
  parent: Schema.Types.ObjectId,
  //col-24分网格,顶级组件100%宽度
  width: Number,
  //使用的标签
  mark:String,
  // 子模块-----------------------
  children: [{ type: Schema.Types.ObjectId, ref: 'component' }],
})
componentSchema.pre('find', function (next) {
  this.populate('children')
  next()
})
const Component = mongoose.model('component', componentSchema)
module.exports = Component
