const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    payment: [{type: Schema.Types.ObjectId, ref: "Payment"}]

});
const User = mongoose.model("User", userSchema);
module.exports=User