const Component = require('../../model/Component');

// 获得产品列表
module.exports = async (ctx) => {

  let data = ctx.request.body
  await Component.updateOne({_id: data._id}, {$set: ctx.request.body})


};
