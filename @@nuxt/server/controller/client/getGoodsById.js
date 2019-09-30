const Produce = require('../../model/Produce');

// 获得产品列表
module.exports = async (ctx) => {

    let { id } = ctx.params

    try {

        const produce = await Produce.findOne({_id:id})

        ctx.body = {
            code: 0,
            data: {
                produce
            }
        };
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
};
