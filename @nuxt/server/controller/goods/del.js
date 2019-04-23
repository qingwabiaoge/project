const Goods = require('../../model/Goods');

//删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let {_id} = ctx.params;
    await Goods.remove({_id})
};
