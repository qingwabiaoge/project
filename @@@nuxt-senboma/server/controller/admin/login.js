const {server:{user}} = require('../../../nuxt.config')
//下面这两个包用来生成时间


//createToken
const createToken = require('../../libs/token/createToken.js');

//登录
module.exports = async (ctx) => {
  //拿到axios传过来的账号和密码
  const {username, password} = ctx.request.body;

  if (username === user.username && password === user.password) {
    ctx.status = 200;
    ctx.state.code = 0
    ctx.state.data = {
      msg: '登录成功',
      user,
      token: createToken(username)
    }

  } else {

    ctx.status = 200;
    ctx.body = {
      code: -1,
      data: {
        msg: '用户名或者密码错误!'
      }
    };
  }
};


