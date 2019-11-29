//页面footer部分显示的组件
const mongoose = require('mongoose')
const { Schema } = mongoose
const shortid = require('shortid')
require('./Component')

const footerSchema = Schema({
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

const Footer = mongoose.model('footer', footerSchema)
module.exports = Footer
