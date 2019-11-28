//页面header部分显示的组件
const mongoose = require('mongoose')
const { Schema } = mongoose
require('./Component')


const headerSchema = Schema({
  background: String,
  bg: String,
  // 是否反色-----
  inverse: Boolean,
  components: [{ type: Schema.Types.ObjectId, ref: 'component' }],//组件标签
})

const Header = mongoose.model('header', headerSchema)
module.exports = Header
