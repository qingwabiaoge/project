const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const goodsSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    payment: [{type: Schema.Types.ObjectId, ref: "Payment"}],  // 1关联作者,可以{user:['作者id']}搜索文章, 2可以通过  .populate("user")显示作者信息

});

const Goods = mongoose.model("Goods", goodsSchema);
module.exports=Goods