const {Component} = require('../../model/');

// 获得产品列表
module.exports = async (ctx) => {

  let {_id} = ctx.params

  //取得fatherid
  const {parent} = await Component.findById(_id)
  await Component.updateOne({_id: parent}, {$pull: {children: _id}})


  /*
    const father = await Component.findById({_id: parent})
    const index = await father.children.findIndex(item => item === '5d8ad37e7d54be1ad0ee36d9')
    console.log(index)
    await father.children.splice(index, 1)
    await father.save()
    await Component.findByIdAndRemove(_id)
  */

}
