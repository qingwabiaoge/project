require('./db')
const User = require('./model/User')
const Goods = require('./model/Goods')
const Payment = require('./model/Payment')

Goods.findOne({})
//  populate("user")将搜索另外一个表的作者信息列出来
    .populate({
        path: "payment",
        populate: {
            path: 'user',
            select: '_id name'
        },
    })
    .exec(function (err, goods) {
        if(err){console.log(err)}
        console.log(goods);
        // prints "The user is Ian Fleming"
    });

