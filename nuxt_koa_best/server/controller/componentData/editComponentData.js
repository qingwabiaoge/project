const ComponentData = require('../../model/ComponentData');

//编辑产品
module.exports = async (ctx) => {

    let conditions = {_id: ctx.request.body._id};
    let update = {$set: ctx.request.body};
    let options = {upsert: true};  //默认为false。如果不存在则创建新记录。

//必须加return才会ctx.body返回
    return  ComponentData.update(conditions,update).then(() => {

        ctx.status = 200
        ctx.body = {
            code: 0,
            data: {msg: '编辑成功'}
        }

    }).catch(err => {
        console.log(err)
        throw new Error(err)
    })




};
