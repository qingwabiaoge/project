const Cat = require('../model/Cat')
const callback = require('./callback')

async function fn() {
    const cat = await Cat.findOne({name: '小花'})
    // console.log(cat)
     cat.findClass(callback)
}

fn()