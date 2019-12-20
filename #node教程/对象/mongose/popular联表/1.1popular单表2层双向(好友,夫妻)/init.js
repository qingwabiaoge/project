/**
 * Created by Danny on 2015/9/29 10:18.
 */

const User = require('./model/User')
// 初始化数据

let lily = new User({ name: 'lily' })
let lucy = new User({ name: 'lucy' })

lily.save((err) => {
  if (err) { throw err }
  if (!lucy.followings) // 如果没有关注则加关注
  {
    //函数未出栈,变量未销毁,引用的对象未释放,就可以拿到 lily._id
    lucy.followings.push(lily._id)// line 1
  }

  lucy.save()
})
