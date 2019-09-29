const Produce = require('../../model/Produce');

//编辑产品
module.exports = async (ctx) => {
    let conditions = {_id: ctx.request.body._id};
    let update = {$set: ctx.request.body};
    return Produce.update(conditions, update)
};


