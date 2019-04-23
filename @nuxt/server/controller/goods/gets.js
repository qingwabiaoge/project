const Goods = require('../../model/Goods');
const i = 1
// 获得所有产品
module.exports = async (ctx) => {
  let {title, category, flag, includeNoPublish, page = 1, size = 99999} = ctx.query

  const filter = {
    $and: [
      //必须判是否存在,如果不判断,前端又忘记数据库也没有下边的某个值  就搜索不到东西
      title ? {title: new RegExp(title, "i")} : {},
      category ? {category: new RegExp(category, 'i')} : {},
      flag ? {flag: true} : {},
      includeNoPublish ? {} : {publish: true},

    ]
  }

  const total = await Goods.countDocuments(filter)

  const goodss = await Goods.find(filter, {content: 0})
  //按照时间排序 _id就是时间戳
    .sort({'_id': -1})
    //限制条数
    .limit(Number(size))
    //跳过分页
    .skip((page - 1) * Number(size));

  ctx.state.code = 0;
  ctx.state.data = {
    total,
    goodss
  }
};
