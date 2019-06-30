const Cat=require('../model/Cat')
const callback=require('./callback')

Cat.create({name:'小花',age:1,type:'雌',id:1})

const xiaohuang=new Cat({
    "name": "小黄",
    age: 10,
    "type": "雌"
})
xiaohuang.save(callback)