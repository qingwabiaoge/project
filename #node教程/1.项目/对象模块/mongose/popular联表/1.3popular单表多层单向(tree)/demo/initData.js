const { Category } = require('./model/')

async function f () {
  const index = new Category({ title: '首页', top: true }),
    article = new Category({ title: '文章', top: true }),
    produce = new Category({ title: '产品', top: true }),
    //二层
    jiaju = new Category({ title: '家居' }),
    //三层
    zuozhi = new Category({ title: '桌子' }),
    yizhi = new Category({ title: '椅子' })


  produce.children.push(jiaju._id)
  jiaju.children.push(zuozhi._id)
  jiaju.children.push(yizhi._id)

  await index.save()
  article.save()
  produce.save()
  zuozhi.save()
  yizhi.save()
  jiaju.save()

}

f()
