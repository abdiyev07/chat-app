import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  avatar: String,
  fullname: {type: String, required: true},
  confirmed: {type: Boolean, required: true},
  confirmHash: {type: String},
  last_seen: Date
}, {
  timestamps: true
})

export default model('User', userSchema)