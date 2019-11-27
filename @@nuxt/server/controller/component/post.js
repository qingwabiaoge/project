const Component = require('../../model/Component');

// 获得产品列表
module.exports = async (ctx) => {
  let component = ctx.request.body


  component = await Component.create(component)
  const father = await Component.findById(component.parent)
  await father.children.push(component._id)
  father.save()


};
