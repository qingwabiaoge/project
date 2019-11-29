/**
 * Created by Danny on 2015/9/29 10:18.
 */

const User = require('./model/User')

//初始化数据

async function f () {
  var lily = new User({ name: 'lily' })
    , lucy = new User({ name: 'lucy' })

//!!!!!!!!!!千万不要忘记await,后面的都异步
  await lily.save()
  lily.followings.push(lucy._id)
  lucy.followings.push(lily._id)
  lily.save()
  lucy.save()

}

f()



