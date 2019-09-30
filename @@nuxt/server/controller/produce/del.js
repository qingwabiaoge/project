const Produce = require('../../model/Produce');

//删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let {_id} = ctx.params;
    await Produce.remove({_id})
};
