const Goods = require('../../model/Goods');
//添加产品
module.exports = async (ctx) => {
    let goods = ctx.request.body
    await  Goods.create(goods)
};