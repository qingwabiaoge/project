const ComponentData = require('../../model/ComponentData');

//删除商品
module.exports = async (ctx) => {
    //拿到要删除的用户id
    let id = ctx.request.body.id;
    //必须加return才会ctx.body返回
    return ComponentData.remove({_id: id}).then(() => {

        ctx.status = 200;
        ctx.body = {
            code: 0,
            data: {
                msg: '删除成功'
            },

        }
    }).catch(err => {
        console.log(err)
        throw new Error(err)
        }
    )
};

