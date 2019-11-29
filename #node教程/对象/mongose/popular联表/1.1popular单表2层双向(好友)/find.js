const User = require('./model/User')
// 初始化数据
User.findOne({ name: 'lucy' })
  .populate('followings')
  .exec((err, res) => {
    console.log(res)
  })
