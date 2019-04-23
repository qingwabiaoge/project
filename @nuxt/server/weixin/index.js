const axios = require('axios')
const WXBizDataCrypt = require('./lib/WXBizDataCrypt')
const util = require('./utils')
const config = require('../config')



//创建一个axios实例
const instance = axios.create({

  headers: {'X-Requested-With': 'XMLHttpRequest'},
});


//微信登陆
async function getSessionKey(code) {
  var openidRes = await instance.get('https://api.weixin.qq.com/sns/jscode2session', {

    params: {
      appid:config.appid,
      secret:config.appsecret,
      js_code:code,//参数名字不能变
      grant_type: "authorization_code"
    }
  });


  return openidRes.data.session_key

}

//解密用户信息返回给前端
function getAllUserInfo(iv,  sessionKey, encryptedData) {
  var pc = new WXBizDataCrypt(config.appid, sessionKey)

  var data = pc.decryptData(encryptedData, iv)

  return data

}


//统一下单

const createUnifiedOrder = async (attach, body,   openid, total_fee) => {
    const params = {
        appid: config.appid,
        attach,
        body,
        mch_id: config.mchid,
        nonce_str: util.createNonceStr(),
        notify_url: 'http://www.xinduyun.com/',
        openid,
        out_trade_no: '20140703' + Math.random().toString().substr(2, 10),
        spbill_create_ip: '192.168.2.210',
        total_fee,
        trade_type: 'JSAPI',
    }
    const sign = util.sign(params)
    var res = await instance.post('https://api.mch.weixin.qq.com/pay/unifiedorder',
        //obj2xml并非promise 不用await接受
        util.obj2xml({
            ...params, ...{sign}
        })
    )

    objres=await util.xml2obj(res.data)
    return objres.xml.prepay_id

}
//二次签名
const getPayParam = function (prepay_id) {
    var payParam = {
        appId: config.appid,//这个不需要返回但是签名需要所以不能删除
        timeStamp: util.createTimestamp(),
        nonceStr: util.createNonceStr(),
        package: 'prepay_id=' + prepay_id,
        signType: 'MD5',
    }
    var paySign=util.sign(payParam)
    payParam = {...payParam,paySign }
    return payParam
}


module.exports = {getSessionKey, getAllUserInfo, createUnifiedOrder,getPayParam}

