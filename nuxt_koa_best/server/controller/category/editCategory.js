const Category = require('../../model/Category');

//编辑产品
module.exports = async (ctx) => {

    let conditions = {_id: ctx.request.body._id};

    let update = {$set: ctx.request.body};
    console.log(update)
    let options = {upsert: true};  //默认为false。如果不存在则创建新记录。
    await  Category.update(conditions, update)
    ctx.status = 200
};
