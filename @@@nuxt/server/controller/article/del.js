const {Article} = require('../../model/');

//删除商品
module.exports = async (ctx) => {
    let {_id} = ctx.params
    console.log(_id)
    //必须加return才会ctx.body返回
    await Article.remove({_id})

};

