const weixin = require('../../weixin')
const {User} = require('../../model/')


module.exports = async (ctx, next) => {
  const createToken = require('../../libs/token/createToken.js');
  const {iv, code, encryptedData} = ctx.query
  console.log(ctx.query)
  const sessionKey = await weixin.getSessionKey(code);
  const userInfo = weixin.getAllUserInfo(iv, sessionKey, encryptedData)
  console.log(userInfo)
  ctx.state.code = 0
  ctx.state.data = {
    openId: userInfo.openId, token: createToken(userInfo.openId)
  }


  /*    ishas = await User.findOne({openId:userInfo.openId})
      console.log(ishas)
      if (!ishas) {
          await User.create(userInfo)
      }

      next();*/
}
