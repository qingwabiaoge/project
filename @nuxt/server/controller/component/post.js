const Component = require('../../model/Component');

// 获得产品列表
module.exports = async (ctx) => {
  let {component, fatherId} = ctx.request.body

  const childComponent = await Component.create({...component, fatherId})

  const fatherComponent = await Component.findById(fatherId)

  await fatherComponent.children.push(childComponent._id)
  fatherComponent.save()


};
