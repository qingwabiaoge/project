const Goods = require('../../model/Goods');

// 获得所有产品
module.exports = async (ctx) => {
    let {name, flag,category} = ctx.query
    name = new RegExp(name, 'i')
    flag=new RegExp(flag,'i')
    category=new RegExp(category,'i')
    try {
        const goodss = await Goods.find({$and:[ {name},
                                                  {flag},
                                                  {category},
                                                  {publish:true}]})
                                    .sort({'_id': -1})
        const total = goodss.length
        ctx.body = {
            code: 0,
            data: {
                total,
                goodss
            }
        };
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
};
