import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    year: { type: String, required: true },
    bed: { type: Number, required: true },
    bath: { type: Number, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' }, pictures: [{ type: String }],
    levels: { type: Number, default: 'No Levels' },
    description: { type: String, default: 'No Description Provided' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House