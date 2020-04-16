
import mongoose from 'mongoose'

const { Schema } = mongoose
const schema = new Schema({
  // _id: Schema.Types.ObjectId,
  title: { type: String}

})

let Tag = mongoose.model('Tag', schema)
export default Tag
