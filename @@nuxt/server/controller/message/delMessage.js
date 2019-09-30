const Message = require('../../model/Message');

//删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
  let {_id} = ctx.params
    //必须加return才会ctx.body返回
    await Message.deleteOne({_id})
};

