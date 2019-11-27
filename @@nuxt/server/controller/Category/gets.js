const Category = require('../../model/Category')


module.exports = async (ctx) => {
  //获得顶级栏目
  const categorys = await Category.find({ 'parent': { $exists: 0 } })
    .populate('children')
    .sort('-sort -_id')
  ctx.state.code = 0
  ctx.state.code = 0
  ctx.state.data = {
    categorys
  }
}
