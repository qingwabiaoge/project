const jwt = require('jsonwebtoken')

function getLocalTime(nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

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

console.log(getLocalTime(decoded.iat))
console.log(getLocalTime(decoded.exp))
