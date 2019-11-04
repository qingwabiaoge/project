const {Girl} = require('../model')

async function f() {

    await  Girl.create({})
}

f()