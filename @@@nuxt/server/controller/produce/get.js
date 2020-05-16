const {Produce} = require('../../model/');

// 获得产品列表
module.exports = async (ctx) => {
    let {_id} = ctx.params
    const produce = await Produce.findOne({_id})
    ctx.state.code = 0
    ctx.state.data = {
        produce
    }
};
