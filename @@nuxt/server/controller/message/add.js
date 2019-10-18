const Message = require('../../model/Message');
//添加产品
module.exports = async (ctx) => {
    let message = ctx.request.body
 return  Message.create(message).then(
        () => {
            ctx.status = 200;
            ctx.body = {
                code: 0,
                data: {msg: 'Add success'}
            }
        }
    ).catch(err => {
     console.log(err)
     throw new Error(err)
    });


};
