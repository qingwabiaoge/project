const jwt = require('jsonwebtoken')

//加密token
const token = jwt.sign({
  name: 'qingwabiaoge',
  _id: 'shilei12'
}, 'my_key', {expiresIn: 60}); //60s
console.log(token)

//解密token
var decoded = jwt.verify(token, 'my_key');
console.log(decoded)
