const Global = require('../../model/Global');


//编辑产品
module.exports = async (ctx) => {
    res=ctx.request.body
    console.log(res)
    let conditions = {id:'config'};
    let update = {...res};
    let options = {upsert: true};  //默认为false。如果不存在则创建新记录。

//必须加return才会ctx.body返回
    return    Global.update(conditions, update).then(() => {

        ctx.status = 200
        ctx.body = {
            code: 0,
            data: {msg: '编辑成功'}
        }
    }).catch(err => {
      throw new Error(err)
    })




};
