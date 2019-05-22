/**
 * Created by Danny on 2015/9/29 10:18.
 */

const User=require('./model/User')
//初始化数据

var lily = new User({name: 'lily'})
    , lucy = new User({name: 'lucy'});


lily.save(function cb(err) {
        if (err) throw err;
        if (!lucy.followings) //如果没有关注则加关注
        {
            lucy.followings.push(lily._id);// line 1
        }

        lucy.save();

    }
);



