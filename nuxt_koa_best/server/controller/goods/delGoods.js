const Goods = require('../../model/Goods');

//删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let id = ctx.request.body.id;
    await Goods.remove({_id: id})
};
