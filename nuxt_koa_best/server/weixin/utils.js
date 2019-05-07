var xml2js = require('xml2js');
const md5 = require('MD5')
const config = require('../config')

// xml -> json
function xml2obj(xml) {
    //xml2js默认会把子子节点的值变为一个数组, explicitArray设置为false
    return new Promise((resolve, reject) => {
            var xmlToObj = new xml2js.Parser({explicitArray: false, ignoreAttrs: true})
            xmlToObj.parseString(xml, function (err, result) {
                    if (result) {
                        resolve(result)
                    }
                    else {
                        reject(err)
                    }
                }
            )
        }
    )

}

//json --> xml
function obj2xml(obj) {
    var builder = new xml2js.Builder();
    return builder.buildObject(obj);
}


var createNonceStr = function () {
    // 随机字符串，不长于32位。推荐随机数生成算法
    return Math.random().toString(36).substr(2, 15);
};

//签名算法
const sign = function (obj) {

    var querystring = Object.keys(obj)
                                    .sort().filter(item => obj[item] !== null && obj[item] !== undefined)
                                     .map(key => key + '=' + obj[key])
                                     .join('&') + "&key=" + config.apikey;

                 return md5(querystring).toUpperCase();
}


var createTimestamp = function () {
    // 时间戳从1970年1月1日00:00:00至今的秒数，即当前的时间
    return parseInt(new Date().getTime() / 1000) + '';
};

var raw = function (args) {
    // 略
};

var getPaySign = function (args) {
    let rawStr = raw(args);
    let apiKey = config.apikey; //key为商户平台设置的密钥key
    let md5Str = md5(rawStr + '&key=' + apiKey);
    return md5Str.toUpperCase();
}

module.exports = {xml2obj, obj2xml, createNonceStr, sign,createTimestamp}
