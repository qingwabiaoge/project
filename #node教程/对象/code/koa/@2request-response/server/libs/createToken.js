const jwt = require('jsonwebtoken');


//登录时：核对用户名和密码成功后，应用将用户的id（图中的user_id）作为JWT Payload的一个属性
module.exports = function(user_id,jwtString){
    const token = jwt.sign({
        user_id: user_id
    }, CONFIG.adminJwtString, {
        expiresIn: '360000s'
    });
    return token;
};
