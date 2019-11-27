module.exports = {
  //seo

  keyword: String,
  category: String,//关联Component的name

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
