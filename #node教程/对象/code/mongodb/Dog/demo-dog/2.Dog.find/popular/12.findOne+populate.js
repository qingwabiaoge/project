const callback = require('../../callback')


const Dog = require('../../../model/Dog')
//��������
require('../../../model/Master')

Dog.findOne({name: 'xiaohua'})
    .populate({path: "master", select: 'name age'})
    .exec(callback);