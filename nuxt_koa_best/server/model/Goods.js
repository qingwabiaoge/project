const mongoose = require('mongoose')
const Schema = mongoose.Schema


//声明schema
const goodsSchema = mongoose.Schema({
    title: String,
    description:String,
    category: String,
    fileList: [{}],//图片列表
    image:String,
    price: Number,
    truePrice: Number,
    number: Number,
    material:String,
    content: String,
    size:String,
    onclick:Number,
    saleNumber:Number,
    color:String,
    flag: String,
    sort: Number,
    like: {
        type: Array,
        default: []
    },
    buyer:{type: Schema.Types.ObjectId, ref: 'Customer'},
    tags: [],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    publish:Boolean,
   // create_time: {type: String, default: Date.now()},
});
//根据schema生成model

const Goods = mongoose.model('Goods', goodsSchema)
module.exports = Goods

