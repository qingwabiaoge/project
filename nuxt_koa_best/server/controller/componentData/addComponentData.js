const ComponentData = require('../../model/ComponentData');
//添加产品
module.exports = async (ctx) => {
    let componentData = ctx.request.body
 return  ComponentData.create(componentData).then(
        () => {
            ctx.status = 200;
            ctx.body = {
                code: 0,
                data: {msg: '添加成功'}
            }
        }
    ).catch(err => {
     console.log(err)
     throw new Error(err)
    });


};