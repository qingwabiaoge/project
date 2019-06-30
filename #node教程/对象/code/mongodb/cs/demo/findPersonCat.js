const Person = require('../model/Person')
require('../model/Cat')
const callback = require('./callback')


Person.findOne({})
    .populate('cat')
    .exec(callback)