const mongoose = require('mongoose')

const { Schema } = mongoose

const goodsSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String

})

const Goods = mongoose.model('Goods', goodsSchema)
module.exports = Goods
