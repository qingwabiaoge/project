const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const componentSchema = Schema({
  //组件唯一的标识符,需要删了当前数据库重新建才能验证
  name: {type: String, unique: true},
  //是否为顶级栏目
  top: Boolean,
  fatherId: Schema.Types.ObjectId,
  //标题字段
  title: String,
  subtitle: String,
  info: String,
  description: String,
  button: String,
//编辑器内容-----------------
  content: String,
//超链接----------------
  href: String,
//image------------
  image: String,
  images: String,
  cimage: String,
  icon: String,
  //background-------------------
  background: String,
  bg: String,
//联系我们附加字段---------------------------------
  tel: String,
  fax: String,
  qq: String,
  email: String,
  address: String,
  map: String,
  qcode: String,//二维码

//开关----------------
  isCategory: Boolean,
  publish: {
    default: true,
    type: Boolean
  },
  show: Boolean, //是否显示模块
  fullpage:Boolean,

//活动时间-----------------------
  starttime: Date,
  endtime: Date,
  //子模块
  children: [{type: Schema.Types.ObjectId, ref: 'component'}]
})

const Component = mongoose.model('component', componentSchema)
module.exports = Component
