/**
 * Created by Danny on 2015/9/29 10:18.
 */

const User = require('./model/User')
//初始化数据

async function  f() {
  var lily =  new User({name: 'lily'})
    , lucy = new User({name: 'lucy'});

//!!!!!!!!!!千万不要忘记await
  await lily.save();
  await  lucy.save()
  await lily.followings.push(lucy._id)
  await lucy.followings.push(lily._id)

  lily.save();
  lucy.save()

}




