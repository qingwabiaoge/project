require('./db/')
const mongoose = require('mongoose')
const User = require('./model/User')
const Goods = require('./model/Goods')

const user = new User({
  _id: new mongoose.Types.ObjectId(),
  name: '小明',
  age: 10
})
user.save()
const goods = new Goods({
  _id: new mongoose.Types.ObjectId(),
  name: '西瓜'
})

goods.save()
