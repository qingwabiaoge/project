const Produce = require('../../model/Produce');
//添加产品
module.exports = async (ctx) => {
    let produce = ctx.request.body
    await  Produce.create(produce)
};
