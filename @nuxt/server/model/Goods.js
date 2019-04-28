const mongoose = require('mongoose')
const Schema = mongoose.Schema


//声明schema
const goodsSchema = mongoose.Schema({
  type: {type: String, default: 'goods'},//数据类型

  title: String,
  subtitle: String,
  info: String,
  description: String,
  content: String,
//seo
  seotitle: String,
  keyword: String,

  //image
  image: String,
  images: [{}],//图片列表

//tags
  cid: Number,
  flag: Boolean,
//sort
  sort: Number,

//other
  suk: Number,
  pv: Number,
  price: Number,
  maxPrice: Number,
  number: Number,
  material: String,
  size: String,
  onclick: Number,
  saleNumber: Number,
  weight: Number,
  color: String,


  like: {
    type: Array,
    default: []
  },
  buyer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  tags: [],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  publish: Boolean,
  // create_time: {type: String, default: Date.now()},
});
//根据schema生成model

const Goods = mongoose.model('Goods', goodsSchema)
module.exports = Goods

