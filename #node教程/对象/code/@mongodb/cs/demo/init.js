const mongoose = require('mongoose')

const Cat = require('../model/Cat')
const Person = require('../model/Person')

fn = async () => {

    const cat = new Cat({
        _id: new mongoose.Types.ObjectId(),
        name: '小白',
        age: 2
    })
    const _cat = await cat.save()


    let person = new Person({
        name: 'xiaoli',
        phone: 110,
        cat: _cat._id

    })
    person.save();

}

fn()