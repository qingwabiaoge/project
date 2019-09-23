const Goods = require('../../model/Goods');

// 获得产品列表
module.exports = async (ctx) => {

    let { id } = ctx.params

    try {

        const goods = await Goods.findOne({_id:id})

        ctx.body = {
            code: 0,
            data: {
                goods
            }
        };
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
};
