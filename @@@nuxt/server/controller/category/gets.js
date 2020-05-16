const {Category} = require('../../model/')


module.exports = async (ctx) => {
  //获得顶级栏目
  const categorys = await Category.find({ 'top':true })
    .populate('children')
    .sort('-sort -_id')
  ctx.state.code = 0
  ctx.state.data = {
    categorys
  }
}
