const fs = require('fs')
const path = require('path')
const User = require('./model/User')

// 初始化数据
async function fn () {
  const i = await User.findOne({ name: 'shilei' })
    .populate({
      path: 'followings',
      populate: {
        path: 'followings'
      }

    })
  fs.writeFile('./1.json', JSON.stringify(i))
}

fn()
