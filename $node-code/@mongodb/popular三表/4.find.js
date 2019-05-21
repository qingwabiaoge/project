require('./db')
//populate的model也要引入
const User = require('./model/User')
const Goods = require('./model/Goods')
const Payment = require('./model/Payment')



//搜索订单
Payment.findOne({})
//  populate("user")将搜索另外一个表的作者信息列出来
    .populate("goods")
    .populate("user")
    .exec(function (err, goods) {
        if (err) return handleError(err);
        console.log(goods);
        // prints "The user is Ian Fleming"
    });

//产品列表