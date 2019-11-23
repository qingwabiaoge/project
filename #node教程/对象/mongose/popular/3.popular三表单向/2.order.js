require('./db')
const mongoose = require('mongoose')
const Payment = require('./model/Payment')

Payment.create({
  goods: ['5dd94a2c2b67161f4c0adf71'],
  user: '5dd94a2c2b67161f4c0adf70',
  state: 1
})
