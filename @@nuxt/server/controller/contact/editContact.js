const Contact = require('../../model/Contact');


//编辑产品
module.exports = async (ctx) => {
  const  contact=ctx.request.body

//必须加return才会ctx.body返回
    return    Contact.updateOne({_id:'5c009a02ad693270d2eab30d'}, contact).then(() => {

        ctx.status = 200
        ctx.body = {
            code: 0,
            data: {msg: '编辑成功'}
        }
    })




};
