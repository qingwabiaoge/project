const Goods = require('../../model/Goods');

// 获得产品列表
module.exports = async (ctx) => {
    let {_id} = ctx.params
    const goods = await Goods.findOne({_id})
    ctx.state.code = 0
    ctx.state.data = {
        goods
    }
};
