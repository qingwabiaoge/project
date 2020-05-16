//页面header部分显示的组件
const mongoose = require('mongoose')
const { Schema } = mongoose
const shortid = require('shortid')
require('./Component')

const headerSchema = Schema({
  _id: {
    type: String,

    'default': shortid.generate
  },
  background: String,
  bg: String,
  // 是否反色-----
  inverse: Boolean,
  components: [{ type: Schema.Types.ObjectId, ref: 'component' }],//组件标签
})
headerSchema.pre('find', function (next) {
  this.populate('component')
  next()
})
const Header = mongoose.model('header', headerSchema)
module.exports = Header
