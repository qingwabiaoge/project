/**
 * Created by Danny on 2015/9/29 10:18.
 */

const User = require('./model/User')
//初始化数据

var
    shilei = new User({name: 'shilei'}),
    lily = new User({name: 'lily'})
    , lucy = new User({name: 'lucy'});


lily.save();
lucy.save()
shilei.save()
shilei.followings.push(lucy._id)
lucy.followings.push(lily._id)



