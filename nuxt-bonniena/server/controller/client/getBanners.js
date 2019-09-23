const component = require('../../model/component');

// 获得所有component
module.exports = async (ctx) => {

    let {position} = ctx.query
    position = new RegExp(position, 'i')
    // position = decodeURIComponent(position)

    try {
        const components = await component.find({position}).sort({'sort': 1})

        ctx.body = {
            code: 0,
            data: {
                components
            }

        };

    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }


};
