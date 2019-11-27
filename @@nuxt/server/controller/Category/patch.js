const Category = require('../../model/Category');

// 获得产品列表
module.exports = async (ctx) => {
  let data = ctx.request.body
  await Category.updateOne({_id: data._id}, {$set: ctx.request.body})
};
