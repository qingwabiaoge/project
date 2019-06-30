const Cat = require('../model/Cat')
const callback = require('./callback')

async function fn() {
    const cat = await Cat.findOne({name: '小花'})

    cat.comment('标题','正文')
    console.log(cat)
}

fn()