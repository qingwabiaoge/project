const Cat = require('../model/Cat')
const callback=require('./callback')

Cat.find({name: '小花'}, callback)