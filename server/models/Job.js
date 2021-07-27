import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    company: { type: String, required: true },
    name: { type: String, required: true },
    time: { type: Number, required: true },
    pay: { type: Number, required: true },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    pictures: [{ type: String }],
    description: { type: String, }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
