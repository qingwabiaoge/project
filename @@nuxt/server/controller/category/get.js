const {Category} = require('../../model/');

// 通过id获得
module.exports = async (ctx) => {

    let {_id} = ctx.params
    const category = await Category.findOne({_id})
    ctx.state.code = 0
    ctx.state.data = {
        category
    }

};
