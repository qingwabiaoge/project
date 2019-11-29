const shortid = require('shortid')
module.exports = {
  //数据库模型 article,produces component global,为了uniform使用
  //
  _id: {
    type: String,

    'default': shortid.generate
  },
  model: String,
  //排序
  sort: Number,
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
  images: Array,
  //cimage: String,
  icon: String,

}
