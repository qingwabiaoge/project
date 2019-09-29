module.exports = {
  //seo
  seotitle: String,
  keyword: String,
  //tags
  cid: Number,
  flag: {type: Boolean, default: false},
  tags: [],
//sort
  sort: Number,
//pv
  pv: Number,
  //发布时间
  updatedAt: {
    type: Date,
    default: Date.now
  },
  //是否发布
  publish: Boolean,

}
