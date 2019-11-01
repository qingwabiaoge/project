
const Article = require('../../model/Article');

module.exports = async (ctx) => {
    let article = ctx.request.body
  await Article.create(article)
};