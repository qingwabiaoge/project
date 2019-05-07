const ComponentData = require('../../model/ComponentData');

// 获得所有componentData
module.exports = async (ctx) => {

    let {id} = ctx.params


    try {
        const componentData = await ComponentData.findOne({_id:id}).sort({'sort': 1})

        ctx.body = {
            code: 0,
            data: {
                componentData
            }

        };

    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }


};
