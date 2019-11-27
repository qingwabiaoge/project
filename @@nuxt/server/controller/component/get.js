const Component = require('../../model/Component');

// 获得产品列表
module.exports = async (ctx) => {

    let {_id} = ctx.params
    const component = await Component.findOne({_id})
    ctx.state.code = 0
    ctx.state.data = {
        component
    }

};
