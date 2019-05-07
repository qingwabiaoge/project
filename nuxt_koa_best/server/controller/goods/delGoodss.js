const Goods = require('../../model/Goods');
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
//批量删除商品
module.exports= async (ctx) => {
    //拿到要删除的用户id
    let ids = ctx.request.body.ids;
    await  Goods.remove({ '_id': { $in: ids }});
};