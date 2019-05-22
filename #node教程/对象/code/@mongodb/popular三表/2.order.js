require('./db')
const mongoose = require('mongoose')
const User = require('./model/User')
const Goods = require('./model/Goods')
const Payment = require('./model/Payment')


//下单
const payment = async (goodsId, userId) => {
    const goods = await  Goods.findOne({_id: goodsId})
    const user = await User.findOne({_id: userId})
    const payment = new Payment({
        _id: new mongoose.Types.ObjectId(),
        goods,
        user,
        success: 1

    });
    await payment.save()



    goods.payment.push(payment._id)
    goods.save()



    user.payment.push(payment._id)
    user.save()
}


payment("5c66d4594935c5113cad22f4", "5c66d4594935c5113cad22f3")





