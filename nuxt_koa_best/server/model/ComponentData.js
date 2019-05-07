const mongoose = require('mongoose')
const componentDataSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    image: String,
    phoneImgurl: String,
    icon: String,
    text: String,
    description: String,
    button: String,
    background: String,
    href: String,
    componentName: String,
    sort: Number,
    content: String,
    starttime:Date,
    endtime:Date

})

const ComponentData = mongoose.model('ComponentData', componentDataSchema)
module.exports = ComponentData
