require('../db/')
const mongoose=require('mongoose')
Schema = mongoose.Schema

var UserSchema = Schema({
    name: String,
    followings: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
var User = mongoose.model('User', UserSchema);

module.exports=User