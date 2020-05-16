
const mongoose =require('mongoose') ;
const {Schema} = mongoose
const schema = new Schema({name: String});

const MpathPlugin =require('mongoose-mpath') ;
schema.plugin(MpathPlugin);

const SiteNode= mongoose.model('SiteNode', schema);

module.exports=SiteNode
