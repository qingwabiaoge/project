module.exports = {
  //seo
  seotitle: String,
  keyword: String,
  cid: Number,

  flag: {type: Boolean, default: false},
  tags: [],
//sort
  sort: Number,
//pv
  pv: Number,

  updatedAt: {
    type: Date,
    default: Date.now
  },
  //是否发布
  publish: Boolean,

}
