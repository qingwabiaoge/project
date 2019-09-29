const mongoose = require('mongoose')
const Schema = mongoose.Schema


//声明schema
const produceSchema = mongoose.Schema({

//产品参数-------------------
  suk: Number,
  pv: Number,
  price: Number,
  maxPrice: Number,
  number: Number,
  //销售量
  snumber: Number,
  material: String,
  size: String,
  weight: Number,
  color: String,
//购买者
  buyer: {type: Schema.Types.ObjectId, ref: 'Customer'},


});
//根据schema生成model

const Produce = mongoose.model('Produce', produceSchema)
module.exports = Produce

