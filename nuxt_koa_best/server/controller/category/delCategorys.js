const Category = require('../../model/Category');

module.exports = async (ctx) => {
    let ids = ctx.request.body.ids;
    Category.remove({'_id': {$in: ids}});
};