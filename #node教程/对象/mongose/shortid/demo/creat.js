const { Girl } = require('../model')

async function f () {

  const lili = new Girl({ name: 'lili' })
  await lili.save()
  //后面全部异步了
  const xiaohong=new Girl({ name: 'xiaohong' })
  xiaohong.follow.push(lili._id)
  xiaohong.save()
}

f()
