const Dog = require('../../../model/Dog')
const callback = require('../../callback')
// age不是15 20的
Dog.find({  tag: { $all: ['5dd927451e520b21f0035d9a', '5dd929a58fb4be0f28b9a420'] } }, callback)
