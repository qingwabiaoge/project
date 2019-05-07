const ComponentData = require('../../model/ComponentData');

// 获得所有componentData
module.exports = async (ctx) => {

    let {componentName} = ctx.query


    try {
        let componentDatas
        if (!componentName) {
            componentDatas = await ComponentData.find({}).sort({'sort': 1})
        }
        else {
            componentDatas = await ComponentData.find({componentName}).sort({'sort': 1})
        }
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
