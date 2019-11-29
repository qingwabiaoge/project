const {Article} = require('../../model/');

//编辑产品
module.exports = async (ctx) => {

    let conditions = {_id: ctx.request.body._id};
    let update = {$set: ctx.request.body};
    console.log( ctx.request.body)
    let options = {upsert: true};  //默认为false。如果不存在则创建新记录。
    await Article.updateOne(conditions, update)

}
