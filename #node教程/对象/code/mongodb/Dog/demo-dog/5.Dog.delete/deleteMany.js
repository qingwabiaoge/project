const callback=require('../callback')

const Dog = require('../../model/Dog')


Dog.deleteMany( {_id:{$in:['5cecf36924298219842cd9c9','5cecf409aab26c113c1bd32f']}},callback)
