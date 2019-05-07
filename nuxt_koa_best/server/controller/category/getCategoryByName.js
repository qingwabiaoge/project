const Category = require('../../model/Category');

// 获得产品列表
module.exports = async (ctx) => {
    let {category} = ctx.params
    const _category = await Category.findOne({category})
    ctx.state.code = 0
    ctx.state.data = {
        category: _category
    }

};
