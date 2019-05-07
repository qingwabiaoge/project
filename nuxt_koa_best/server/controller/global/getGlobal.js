const Global = require('../../model/Global');

// 获得产品列表
module.exports = async (ctx) => {



    try {

        const global = await Global.findOne()
        ctx.body = {
            code: 0,
            data: {
                global
            }
        };
    }
    catch (err) {

        console.log(err)
        throw new Error(err)
    }
};
