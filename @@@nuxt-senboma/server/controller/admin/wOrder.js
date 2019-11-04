const config = require('../../config')
const weixin = require('../../weixin')

module.exports = async (ctx, next) => {

    const prepay_id = await weixin.createUnifiedOrder('支付测试', '微信支付测试',  "ooKZY5P44LXv6l8Ho2PEDaQWCyHk", 1)

    const payParam = await weixin.getPayParam(prepay_id)
    console.log(payParam)


    ctx.state.code = 0
    ctx.state.data = {payParam}

}


