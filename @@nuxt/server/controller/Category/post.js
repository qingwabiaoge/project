const Category = require('../../model/Category');

// 获得产品列表
module.exports = async (ctx) => {
  let category = ctx.request.body


  category = await Category.create(category)
  const father = await Category.findById(category.parent)
  await father.children.push(category._id)
  father.save()


};
