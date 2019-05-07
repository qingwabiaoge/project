const Article = require('../../model/Article');
const CONFIG=require('../../config')

// 按照条件获得文章列表
module.exports = async (ctx, next) => {

    let {title,category, page=1,  limit=CONFIG.articlePageSize} = ctx.query


    try {

        let articles = await Article
            .find({
                    $and: [{title: new RegExp(title, 'i')},
                        {category: new RegExp(category, 'i')},
                        {publish:true}
                    ]
                },
                {content: 0}//不加载content
            )
            .limit(limit)
            .skip((page - 1) * CONFIG.articlePageSize)
            .sort({'create_time': -1})
            .exec();

        let total = articles.length

        ctx.status = 200;
        ctx.body = {
            code: 0,
            data: {
                articles,
                total
            }
        };
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }


};
