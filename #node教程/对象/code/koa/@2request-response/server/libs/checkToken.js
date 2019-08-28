const jwt = require('jsonwebtoken');
//检查token是否过期
const CONFIG = require('../../config')
module.exports = async (ctx, next) => {
  //拿到token


  if (ctx.request.header['authorization']) {
    let token = ctx.request.header['authorization'].split(' ')[1];
    //解码token
    let decoded = jwt.decode(token, CONFIG.adminJwtString);
    //console.log(decoded);的输出 ：{ user_id: 'admin', iat: 1494405235, exp: 1494405235 }
    if (decoded.user_id === CONFIG.user.username && decoded.exp <= new Date() / 1000) {
      ctx.status = 401;
      ctx.state.code = -1;
      ctx.state.msg = 'token过期了'
    } else {
      //如果权限没问题
      return next();
    }
  } else {
    ctx.status = 401;
    ctx.state.code=-1;
    ctx.state.msg='没有权限'
  }
  //看到这里请继续读完下面的代码
};

