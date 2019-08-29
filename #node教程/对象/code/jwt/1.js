const jwt = require('jsonwebtoken')



/*
* Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms").
* */

const token = jwt.sign({
  name: 'qingwabiaoge',
  _id: 'shilei12'
}, 'my_token', {expiresIn: 60});


console.log(token)
var decoded = jwt.verify(token, 'my_token');
console.log(decoded)
