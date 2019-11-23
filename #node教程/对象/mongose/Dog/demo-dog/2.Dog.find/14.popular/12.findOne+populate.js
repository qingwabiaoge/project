const callback = require('../../callback')

const Dog = require('../../../model/Dog')

require('../../../model/Tag')

Dog.findOne()
  .populate({ path: 'tag', select: 'title' })
  .exec(callback)
