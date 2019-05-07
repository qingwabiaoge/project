const weixin = require('../../weixin')
const User = require('../../model/User')
module.exports = async (ctx, next) => {
    let {openId} = ctx.query
    let userInfo = await User.findOne({openId})
    ctx.status = 200;
    ctx.state.code=0
    ctx.state.data={userInfo}
}
