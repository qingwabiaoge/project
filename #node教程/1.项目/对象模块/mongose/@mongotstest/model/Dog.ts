import mongoose from 'mongoose'
const {Schema} = mongoose


const schema = new Schema({
  name: {type: String, required: true,},
  age: {type: Number, min: 1, max: 20},
  tag:[{type: Schema.Types.ObjectId, ref: 'Tag' }]

} ,{ timestamps: true })

/* --------------------建立类-------------------------------------- */

const Dog = mongoose.model('Dog', schema) // 两个Dog都是类名，不是数据库名字

export default Dog
