const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//声明schema
const schema = mongoose.Schema({
    // recheck: String,
    openId: String,
    avatarUrl: String,
    nickName: String,
    contact: [{
        address: String,
        name:String,
        tel: String,

    }],
    name: String,
    unionid: String,
    province: String,
    country: String,
    city: String,
    gender: String,
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
});
//根据schema生成model


const User = mongoose.model('User', schema)
module.exports = User

