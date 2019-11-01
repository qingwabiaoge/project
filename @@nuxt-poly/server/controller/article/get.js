const Article = require('../../model/Article');

// 获得产品列表
module.exports = async (ctx) => {

    let {_id} = ctx.params
    const article = await Article.findOne({_id})
    ctx.state.code = 0
    ctx.state.data = {
        article
    }

};
