require('./db')
const Goods = require('./model/Goods')
const Payment = require('./model/Payment')

Goods.findOne({ _id: '5dd94a2c2b67161f4c0adf71' }).exec((err, res) => {
  console.log(res)
})

Payment.findOne({ goods: '5dd94a2c2b67161f4c0adf71' }).exec((err, res) => {
  console.log(res)
})
