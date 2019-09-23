const weixin = require('../../weixin')
const User = require('../../model/User')
module.exports=async (ctx, next) => {
    console.log(ctx.body)
    let {openId,contact} = ctx.request.body
    const user = await User.findOne({openId})
    user.contact.push(contact)
    user.save()
}
