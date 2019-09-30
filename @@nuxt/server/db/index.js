const config=require('../config.js')
const mongoose = require('mongoose');


mongoose.connect(config.dataBash, {useNewUrlParser:true}, function(err){
    if(err){
        console.log('Mongo Connection Error:' + err)
    }else{
        console.log('Mongo connection success!')
    }
})
