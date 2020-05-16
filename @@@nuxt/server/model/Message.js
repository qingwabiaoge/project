const mongoose = require('mongoose')
const messageSchema = mongoose.Schema({
  name: String,
  tel: String,
  content: String

})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message
