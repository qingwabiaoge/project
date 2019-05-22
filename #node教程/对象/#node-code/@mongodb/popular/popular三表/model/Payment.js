const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const paymentSchema = Schema({
    _id: Schema.Types.ObjectId,
    goods: {type: Schema.Types.ObjectId, ref: "Goods"},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    success: Number

})

const Payment = mongoose.model("Payment", paymentSchema);

module.exports=Payment