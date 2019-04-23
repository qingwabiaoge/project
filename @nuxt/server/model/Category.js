const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({

  title: String,
  subtitle: String,
  info: String,
  description: String,
  content: String,
  button: String,

  image: String,
  phoneimage: String,
  icon: String,
  iconFont: String,

  backgroundImage: String,
  background: String,
  href: String,



  ul: [{
    title: String,
    subtitle: String,
    image: String,
    info: String,
    description: String,
    content: String,

    phoneimage: String,
    icon: String,
    button: String,
    background: String,
    href: String,
    categoryName: String,
    sort: Number,
    starttime: Date,
    endtime: Date,
    // path:String

  }]
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
