const Category = require('../../model/Category');

module.exports = async (ctx, next) => {
    const {all = false} = ctx.query
   const categorys = await Category.find( {$or: [{publish: !all}, {publish: true}]},).sort({'sort': 1})//按照sort字段正需排列
    ctx.status = 200;
    ctx.state.code = 0
    ctx.state.data = {categorys}
}


