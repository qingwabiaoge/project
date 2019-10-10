const Component = require('../../model/Component');

// 获得产品列表
module.exports = async (ctx) => {

  const components = await Component.find({top:true}).populate('children').sort('-sort -_id')
  ctx.state.code = 0
  ctx.state.code = 0;
  ctx.state.data = {
    components
  }

};
