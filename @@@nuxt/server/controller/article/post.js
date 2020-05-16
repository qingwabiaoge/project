
const {Article} = require('../../model/');

module.exports = async (ctx) => {
    let article = ctx.request.body
  await Article.create(article)
};
