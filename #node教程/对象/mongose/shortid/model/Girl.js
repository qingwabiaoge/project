const mongoose = require('mongoose')
var Schema = mongoose.Schema
const shortid = require('shortid')
// shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
const schema = new Schema({

  _id: {
    type: String,

    'default': shortid.generate
  },
  name: String,
  follow: [{type:String,ref:'girl'}]

})
const Girl = mongoose.model('Girl', schema)
module.exports = Girl
