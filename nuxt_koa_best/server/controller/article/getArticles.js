const Article = require('../../model/Article');

// 按照条件获得文章列表
module.exports = async (ctx, next) => {
    const {title, page, category, all = false} = ctx.query
    const articles = await Article
        .find({
                $and: [
                    // {publish: true},
                    {$or: [{publish: !all}, {publish: true}]},
                    {title: new RegExp(title, 'i')},
                    {category: new RegExp(category, 'i')},

                ]
            },
            {content: 0} //不列出content
        )
        .limit(50)
        .skip((page - 1) * 30)
        .sort({'create_time': -1})
        .exec()

    ctx.status = 200;
    ctx.state.code = 0
    ctx.state.data = {
        articles: articles,
        total: articles.length
    }
};
