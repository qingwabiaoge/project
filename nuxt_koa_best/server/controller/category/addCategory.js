const Category = require('../../model/Category');

module.exports = async (ctx) => {
    let category = ctx.request.body
    await Category.create(category)
};