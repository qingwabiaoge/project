const Dog = require('../../model/Dog')
const callback = require('../../callback')
// age是数组里的数字
Dog.find({ name: 'xiaohua', age: { $in: [10, 11, 20] } }, callback)
