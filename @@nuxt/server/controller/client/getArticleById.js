const Article = require('../../model/Article');

// 获得产品列表
module.exports = async (ctx) => {

    let { id } = ctx.params
console.log(id)
    try {

        const article = await Article.findOne({_id:id})

        ctx.body = {
            code: 0,
            data: {
                article
            }

        };

    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }


};
