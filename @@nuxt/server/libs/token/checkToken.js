const jwt = require('jsonwebtoken');
//检查token是否过期
const CONFIG=require('../../config')
module.exports = async ( ctx, next ) => {
    //拿到token
  if(ctx.request.header['authorization']){
        let token = ctx.request.header['authorization'].split(' ')[1];
        //解码token
        let decoded = jwt.decode(token, CONFIG.adminJwtString);
        //console.log(decoded);的输出 ：{ user_id: 'admin', iat: 1494405235, exp: 1494405235 }
        if(decoded.user_id===CONFIG.user.username && decoded.exp <= new Date()/1000){
            ctx.status = 401;
            ctx.body = {
                code: -1,
                data: {
                    msg: 'token过期'
                },
            };
        }else{
            //如果权限没问题
            return next();
        }
    }else{
        ctx.status = 401;
        ctx.body = {
            code: -1,
            data: {
                msg:'没有权限，请重新登陆'
            },

        };
    }
    //看到这里请继续读完下面的代码
};

// 上面的 jwt.decode(token, 'sinner77') 只是把信息解密出来，然后再验证是否还在有效期以内
// 但是这个sinner77的参数是无效的，直接使用jwt.decode(token)或者jwt.decode(token, 'xxxx')
// 解密出来的信息都是一致的，相当于没有对这个token进行是否合法的验证，达不到登录基本的安全性
// 请使用下面的代码
// module.exports = async ( ctx, next ) => {
//     const authorization = ctx.get('Authorization');
//     if (authorization === '') {
//         ctx.throw(401, 'no token detected in http header 'Authorization'');
//     }
//     const token = authorization.split(' ')[1];
//     let tokenContent;
//     try {
//         tokenContent = await jwt.verify(token, 'sinner77');     //如果token过期或验证失败，将抛出错误
//     } catch (err) {
//         ctx.throw(401, 'invalid token');
//     }
//     await next();
// }
