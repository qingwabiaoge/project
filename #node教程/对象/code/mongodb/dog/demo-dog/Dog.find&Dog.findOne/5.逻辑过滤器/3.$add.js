const Dog = require('../../../model/Dog')
const callback=require('../../callback')

Dog.find({$and: [{name:'小花'},{age:'1'}]}, callback)
