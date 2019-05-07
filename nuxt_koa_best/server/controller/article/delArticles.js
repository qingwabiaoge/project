const Article = require('../../model/Article');

//批量删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let ids = ctx.request.body
    console.log(ids)
    await Article.remove({'_id': {$in: ids}})

};