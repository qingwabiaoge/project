const Produce = require('../../model/Produce');

// 获得所有产品
module.exports = async (ctx) => {
    let {name, flag,category} = ctx.query
    name = new RegExp(name, 'i')
    flag=new RegExp(flag,'i')
    category=new RegExp(category,'i')
    try {
        const produces = await Produce.find({$and:[ {name},
                                                  {flag},
                                                  {category},
                                                  {publish:true}]})
                                    .sort({'_id': -1})
        const total = produces.length
        ctx.body = {
            code: 0,
            data: {
                total,
                produces
            }
        };
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
};
