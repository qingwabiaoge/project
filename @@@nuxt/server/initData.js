const {Category} = require('./model')
async function f() {
  const index = new Category({ title: '首页' }),
    article = new Category({ title: '文章' }),
    produce = new Category({ title: '产品' })
   zuozhi = new Category({ title: '桌子' })
   yizhi = new Category({ title: '椅子' })
  await  index.save()
  await  article.save()


  await produce.children.push(zuozhi._id)
  await produce.children.push(yizhi._id)
   yizhi.parent=produce._id
   zuozhi.parent=produce._id


  await  produce.save()
  await zuozhi.save()
  await yizhi.save()

}
f()
