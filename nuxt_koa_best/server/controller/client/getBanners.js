const ComponentData = require('../../model/ComponentData');

// 获得所有componentData
module.exports = async (ctx) => {

    let {position} = ctx.query
    position = new RegExp(position, 'i')
    // position = decodeURIComponent(position)

    try {
        const componentDatas = await ComponentData.find({position}).sort({'sort': 1})

        ctx.body = {
            code: 0,
            data: {
                componentDatas
            }

        };

    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }


};
