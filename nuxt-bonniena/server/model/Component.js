const mongoose = require('mongoose')
const componentSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  etitle: String,
  info: String,
  description: String,
  content: String,
  href: String,
  key:String,
  button: String,
  width:String, //col ;md='with'
//image------------

  image: String,
  cimage: String,
  icon: String,

  //-------------------
  background: String,
  backgroundColor: String,

//联系我们附加字段---------------------------------
  tel: String,
  fax: String,
  qq: String,
  email: String,
  address: String,
  map: String,
  qcode: String,//二维码

//开关
  isCategory: Boolean,
  publish: {
    default: true,
    type: Boolean
  },


//活动时间
  starttime: Date,
  endtime: Date

})

const Component = mongoose.model('component', componentSchema)
module.exports = Component
