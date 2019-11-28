const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../Category')
module.exports={
  //只有article和produce使用
  keyword: String,
  seotitle: String,
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }],
  flag: { type: Boolean, default: false },
  tags: [],
  updatedAt: {
    type: Date,
    default: Date.now
  },
  //是否发布
  publish: Boolean,
}
