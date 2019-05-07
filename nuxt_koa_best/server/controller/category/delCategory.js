const Category = require('../../model/Category');

//删除商品
module.exports = async (ctx) => {
    let {_id} = ctx.params
   await Category.remove({_id})
};

