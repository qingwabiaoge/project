const mongoose = require('mongoose')

const { Schema } = mongoose
const paymentSchema = Schema({
  goods: [{ type: Schema.Types.ObjectId, ref: 'Goods' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  // 1.提交点单,2.付款 3. 签收 4.退款
  state: Number

})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment
