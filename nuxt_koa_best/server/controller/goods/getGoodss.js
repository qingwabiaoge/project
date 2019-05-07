const Goods = require('../../model/Goods');

// 获得所有产品
module.exports = async (ctx) => {
    let {title, flag, category, all = false, page = 1, size = 99999} = ctx.query
    title = new RegExp(title, 'i');
    flag = new RegExp(flag, 'i');
    category = new RegExp(category, 'i');


    const goodss = await Goods.find({
        $and: [
            {title},
            {flag},
            {category},
            {$or: [{publish: !all}, {publish: true}]}]
    })
        .sort({'_id': -1})
        .limit(Number(size))
        .skip((page - 1) * Number(size));

    ctx.state.code = 0;
    ctx.state.data = {
        total: goodss.length,
        goodss
    }
};
