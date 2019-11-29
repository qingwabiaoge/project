const {Message} = require('../../model/');

//批量删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let {ids} = ctx.request.body
    console.log(ids)
    await Message.deleteMany({'_id': {$in: ids}})

};
